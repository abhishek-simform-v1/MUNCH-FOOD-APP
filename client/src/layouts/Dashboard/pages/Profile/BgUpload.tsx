// BgUpload.jsx
import { useState } from 'react';
import { Form } from 'antd';
import style from './style.module.css';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { v4 } from 'uuid';
import { auth, db, imageStore } from '../../../../database/firebase-config';
import { ToastContainer, toast } from 'react-toastify';
import { doc, setDoc } from 'firebase/firestore';
import { useAppSelector } from '../../../../hooks/hooks';
import { selectUser } from '../../../../slices/userSlice';
import uploadIcon from './../../../../assets/icons/upload.svg';

const BgUpload = ({
  setProfileBg,
  profileBg,
  form,
  current_img,
  setProfileBgUrl,
  profileBgUrl,
}) => {
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

  const onUpload = async (e) => {
    const file = e.target.files[0];
    const allowedFileTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    const allowedFileSize = 3 * 1024 * 1024; // 3MB
    if (
      file &&
      allowedFileTypes.includes(file.type) &&
      file.size <= allowedFileSize
    ) {
      const base64 = await convertToBase64(file);
      const imageRef = ref(imageStore, `users/userImage${v4()}`);
      const uploading_image = uploadString(imageRef, base64, 'data_url')
        .then(() =>
          getDownloadURL(imageRef).then((downloadURL) => {
            const user = auth.currentUser;
            if (user) {
              setDoc(
                doc(db, 'users', user.uid),
                {
                  user_bg_img: downloadURL,
                },
                { merge: true }
              )
                .then(() => {
                  setProfileBgUrl(downloadURL);
                  setProfileBg(downloadURL);
                })
                .catch(() => {});
            }
          })
        )
        .catch(() => console.log('first'));
      toast.promise(
        uploading_image,
        {
          pending: 'Uploading Image',
          success: 'Image Uploaded successfully 👌',
        },
        {
          position: 'top-center',
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        }
      );
    } else {
      toast.error(
        'Invalid file. Please select a JPG, PNG, or JPEG file up to 3MB.',
        {
          position: 'top-right',
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        }
      );
    }
  };

  return (
    <div>
      <Form.Item name="user_bg_image" className={style.user_bg_image}>
        <div className={style.profile_bg_image_wrapper}>
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
            name="file_bg"
            id="file_bg"
          />
          <label htmlFor="file_bg">
            <img src={uploadIcon} alt="upload Icon" />
          </label>
        </div>
      </Form.Item>
    </div>
  );
};

export default BgUpload;
