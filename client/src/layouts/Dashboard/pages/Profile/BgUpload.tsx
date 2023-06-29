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
import uploadIcon from "./../../../../assets/icons/upload.svg";
const BgUpload = ({
  setProfileBg,
  profileBg,
  form,
  current_img,
  setProfileBgUrl,
  profileBgUrl,
}: any) => {
  function convertToBase64(file: File) {
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
                user_bg_image: downloadURL,
              },
              { merge: true }
            )
              .then(() => {
                setProfileBgUrl(downloadURL);
                setProfileBg(downloadURL);
                toast.success("Background image updated", {
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
                toast.error("Failed to update background image", {
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
  };
  return (
    <div>
      <Form.Item name="user_bg_image" className={style.user_bg_image}>
        <div
          style={{
            height: "300px",
            position: "relative",
          }}
        >
          <ToastContainer />
          {profileBg || current_img ? (
            <img
              className={style.profile_bg_image}
              src={profileBg ? profileBg : current_img}
              alt=""
            />
          ) : (
            <span className={style.decoy_image}></span>
          )}
          <input
            className={style.inputfile}
            onChange={onUpload}
            type="file"
            name="file"
            id="file"
          />
          <label htmlFor="file">
            <img src={uploadIcon} alt="upload Icon" />
          </label>
        </div>
      </Form.Item>
    </div>
  );
};

export default BgUpload;
