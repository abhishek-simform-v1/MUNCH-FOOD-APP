import { useState } from "react";
import { Form } from "antd";
import style from "./style.module.css";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { v4 } from "uuid";
import { auth, db, imageStore } from "../../../../database/firebase-config";
import { ToastContainer, toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";
import { useAppSelector } from "../../../../hooks/hooks";
import { getUser, selectUser } from "../../../../slices/userSlice";
import Paragraph from "../../../../utils/Typography/Paragraph";
const ProfileUpload = ({
  setProfile,
  profile,
  form,
  current_img,
  setProfileUrl,
  profileUrl,
}: any) => {
  function convertToBase64(file: File) {
    console.log(profile);
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }
  const onUpload = async (e: any) => {
    const file = e.target.files[0];
    const allowedFileTypes = ["image/jpeg", "image/png", "image/jpg"];
    const allowedFileSize = 3 * 1024 * 1024; // 3MB
    if (
      file &&
      allowedFileTypes.includes(file.type) &&
      file.size <= allowedFileSize
    ) {
      const base64: any = await convertToBase64(e.target.files[0]);
      const imageRef = ref(imageStore, `users/userImage${v4()}`);
      uploadString(imageRef, base64, "data_url")
        .then(() =>
          getDownloadURL(imageRef).then((downloadURL) => {
            const user = auth.currentUser;
            if (user) {
              setDoc(
                doc(db, "users", user.uid),
                {
                  user_image: downloadURL,
                },
                { merge: true }
              )
                .then(() => {
                  setProfileUrl(downloadURL);
                  setProfile(downloadURL);
                  toast.success("Profile image updated", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                })
                .catch(() => {
                  toast.error("Failed to update profile image", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                });
            }
          })
        )
        .catch(() => console.log("first"));
    } else {
      toast.error(
        "Invalid file. Please select a JPG, PNG, or JPEG file up to 3MB.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }
  };
  return (
    <div>
      <Form.Item name="user_image">
        <div className={style.user_image}>
          <ToastContainer />
          <img
            className={style.profile_image}
            src={profileUrl ? profileUrl : current_img}
            alt=""
          />

          <div className={style.user_image_desc}>
            <Paragraph>Update and upload your profile Photo Here</Paragraph>
            <input
              className={style.input_file}
              onChange={onUpload}
              type="file"
              name="file_for_profile"
              id="file_for_profile"
            />
            <label htmlFor="file_for_profile">
              {profile!?.length > 0 ? "Update Image" : "Upload Image"}
            </label>
          </div>
        </div>
      </Form.Item>
    </div>
  );
};

export default ProfileUpload;
