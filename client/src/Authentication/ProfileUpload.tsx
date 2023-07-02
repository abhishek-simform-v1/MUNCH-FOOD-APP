// import { useState } from 'react';
// import { Form } from 'antd';
// import style from './style.module.css';
// import { getDownloadURL, ref, uploadString } from 'firebase/storage';
// import { v4 } from 'uuid';
// import { auth, db, imageStore } from '../../../../database/firebase-config';
// import { ToastContainer, toast } from 'react-toastify';
// import { doc, setDoc } from 'firebase/firestore';
// import { useAppSelector } from '../../../../hooks/hooks';
// import { getUser, selectUser } from '../../../../slices/userSlice';
// import Paragraph from '../../../../utils/Typography/Paragraph';
// const ProfileUpload = ({
//   setProfile,
//   profile,
//   form,
//   current_img,
//   setProfileUrl,
//   profileUrl,
// }: any) => {
//   function convertToBase64(file: File) {
//     console.log(profile);
//     return new Promise((resolve, reject) => {
//       const fileReader = new FileReader();
//       fileReader.readAsDataURL(file);
//       fileReader.onload = () => {
//         resolve(fileReader.result);
//       };
//       fileReader.onerror = (error) => {
//         reject(error);
//       };
//     });
//   }
//   const onUpload = async (e: any) => {
//     const file = e.target.files[0];
//     const allowedFileTypes = ['image/jpeg', 'image/png', 'image/jpg'];
//     const allowedFileSize = 3 * 1024 * 1024; // 3MB
//     if (
//       file &&
//       allowedFileTypes.includes(file.type) &&
//       file.size <= allowedFileSize
//     ) {
//       const base64: any = await convertToBase64(e.target.files[0]);
//       const imageRef = ref(imageStore, `users/userImage${v4()}`);
//       const uploadImage = () =>
//         uploadString(imageRef, base64, 'data_url')
//           .then(() =>
//             getDownloadURL(imageRef).then((downloadURL) => {
//               const user = auth.currentUser;
//               if (user) {
//                 setDoc(
//                   doc(db, 'users', user.uid),
//                   {
//                     user_image: downloadURL,
//                   },
//                   { merge: true }
//                 )
//                   .then(() => {
//                     setProfileUrl(downloadURL);
//                     setProfile(downloadURL);
//                   })
//                   .catch(() => {
//                     toast.error('Failed to update profile image', {
//                       position: 'top-right',
//                       autoClose: 2500,
//                       hideProgressBar: false,
//                       closeOnClick: true,
//                       pauseOnHover: true,
//                       draggable: true,
//                       progress: undefined,
//                       theme: 'light',
//                     });
//                   });
//               } else {
//                 setDoc(
//                   doc(db, 'users', v4()),
//                   {
//                     user_image: downloadURL,
//                   },
//                   { merge: true }
//                 )
//                   .then(() => {
//                     setProfileUrl(downloadURL);
//                     setProfile(downloadURL);
//                   })
//                   .catch((error) => {
//                     toast.error(error, {
//                       position: 'top-right',
//                       autoClose: 2500,
//                       hideProgressBar: false,
//                       closeOnClick: true,
//                       pauseOnHover: true,
//                       draggable: true,
//                       progress: undefined,
//                       theme: 'light',
//                     });
//                   });
//               }
//             })
//           )
//           .catch(() => console.log('first'));
//       toast.promise(
//         uploadImage,
//         {
//           pending: 'image is uploading',
//           success: 'image Uploaded resolved 👌',
//           error: 'can not upload image 🤯',
//         },
//         {
//           position: 'top-center',
//           autoClose: 500,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: 'light',
//         }
//       );
//     } else {
//       toast.error(
//         'Invalid file. Please select a JPG, PNG, or JPEG file up to 3MB.',
//         {
//           position: 'top-right',
//           autoClose: 2500,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: 'light',
//         }
//       );
//     }
//   };
//   return (
//     <div className={style.user_image}>
//       <ToastContainer />
//       <img
//         className={style.profile_image}
//         src={profileUrl ? profileUrl : current_img}
//         alt=""
//       />

//       <div className={style.user_image_desc}>
//         <input
//           className={style.input_file}
//           onChange={onUpload}
//           type="file"
//           name="file_for_profile"
//           id="file_for_profile"
//         />
//         <label htmlFor="file_for_profile">
//           {profile!?.length > 0 ? 'Update Image' : 'Upload Image'}
//         </label>
//       </div>
//     </div>
//   );
// };

// export default ProfileUpload;
import { useState } from 'react';
import { Form } from 'antd';
import style from './auth.module.css';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { v4 } from 'uuid';
import { auth, db, imageStore } from '../database/firebase-config';
import { ToastContainer, toast } from 'react-toastify';
import { doc, setDoc } from 'firebase/firestore';
import { useAppSelector } from '../hooks/hooks';
import { getUser, selectUser } from '../slices/userSlice';
import Paragraph from '../utils/Typography/Paragraph';

const ProfileUpload = ({
  setProfile,
  profile,
  form,
  setDisabled,
  current_img,
  setProfileUrl,
  profileUrl,
}: any) => {
  const convertToBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result as string);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const showErrorMessage = (message: string) => {
    toast.error(message, {
      position: 'top-right',
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const uploadImage = async (base64: string) => {
    const imageRef = ref(imageStore, `users/userImage${v4()}`);
    setDisabled(true);

    try {
      await uploadString(imageRef, base64, 'data_url');
      const downloadURL = await getDownloadURL(imageRef);
      const user = auth.currentUser;
      const docRef = user ? doc(db, 'users', user.uid) : doc(db, 'users', v4());
      await setDoc(
        docRef,
        {
          user_image: downloadURL,
        },
        { merge: true }
      );
      setProfileUrl(downloadURL);
      setDisabled(false);
      setProfile(downloadURL);
    } catch (error) {
      showErrorMessage('Failed to update profile image');
    }
  };

  const onUpload = async (e: any) => {
    const file = e.target.files[0];
    const allowedFileTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    const allowedFileSize = 3 * 1024 * 1024; // 3MB

    if (
      file &&
      allowedFileTypes.includes(file.type) &&
      file.size <= allowedFileSize
    ) {
      try {
        const base64 = await convertToBase64(file);
        toast.promise(
          () => uploadImage(base64),
          {
            pending: 'Image is uploading',
            success: 'Image uploaded successfully 👌',
            error: 'Failed to upload image 🤯',
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
      } catch (error) {
        showErrorMessage('Failed to convert image to base64');
      }
    } else {
      showErrorMessage(
        'Invalid file. Please select a JPG, PNG, or JPEG file up to 3MB.'
      );
    }
  };

  return (
    <div className={style.user_image}>
      <img
        className={style.profile_image}
        src={profileUrl ? profileUrl : current_img}
        alt=""
      />

      <div className={style.user_image_desc}>
        <input
          className={style.input_file}
          onChange={onUpload}
          type="file"
          name="file_for_profile"
          id="file_for_profile"
        />
        <label htmlFor="file_for_profile">
          {profile?.length > 0 ? 'Update Image' : 'Upload Image'}
        </label>
      </div>
    </div>
  );
};

export default ProfileUpload;
