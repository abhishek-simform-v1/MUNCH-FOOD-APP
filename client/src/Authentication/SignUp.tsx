import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router-dom';
import style from './auth.module.css';
import { useFormik } from 'formik';
// import { useState } from "react";
import { int, validationSchema } from './validation/validationScema';
import Title from '../utils/Typography/Title';
import ImageUploading from 'react-images-uploading';
import authImage from './../assets/signin.jpg';
import profile from './../assets/icons/signinprofile.svg';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';
import { app, auth, db, imageStore } from '../database/firebase-config';
import { v4 } from 'uuid';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { useAppDispatch } from '../hooks/hooks';
import { LOG_IN } from '../slices/userSlice';
import SubTitle from '../utils/Typography/SubTitle';
type imageType = {
  data_url: string;
  file: File;
};
const SignUp = () => {
  const [images, setImages] = useState<imageType[]>();
  const maxNumber = 1;

  const onChange = (imageList: any, addUpdateIndex: any) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleSignUp = () => {
    if (formik.isSubmitting) {
      toast.promise(
        () => new Promise((resolve) => setTimeout(resolve, 1000)),
        {
          pending: 'Creating User',
        },
        {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        }
      );
    }
    if (images!.length > 0) {
      const imageRef = ref(imageStore, `users/userImage${v4()}}`);
      uploadString(imageRef, images![0].data_url, 'data_url')
        .then(() => {
          console.log('Uploaded a data_url string!');
        })
        .then(() =>
          getDownloadURL(imageRef).then((downloadURL) => {
            createUserWithEmailAndPassword(
              auth,
              formik.values.email,
              formik.values.confirm_pwd
            )
              .then((cred) => {
                navigate('/');
                return (
                  setDoc(doc(db, 'users', cred.user.uid), {
                    user_name: formik.values.name,
                    user_email: formik.values.email,
                    user_image: downloadURL,
                  }),
                  dispatch(LOG_IN()),
                  toast.success('User Created', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                  }),
                  formik.resetForm()
                );
              })
              .catch((err) => {
                formik.resetForm();
                return toast.error('User already Exist', {
                  position: 'top-right',
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: 'light',
                });
              });
          })
        )
        .catch(() => console.log('first'));
    }
  };

  const formik = useFormik({
    initialValues: int,
    validationSchema: validationSchema,
    onSubmit: handleSignUp,
  });

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.auth_form}>
            <div className={style.formContainer}>
              <div style={{ alignSelf: 'center' }}>
                <SubTitle>Sign Up</SubTitle>
              </div>

              <form className={style.form} onSubmit={formik.handleSubmit}>
                <div className="inputFile">
                  <ImageUploading
                    multiple
                    value={images!}
                    onChange={onChange}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                  >
                    {({
                      imageList,
                      onImageUpload,
                      onImageUpdate,
                      onImageRemove,
                      isDragging,
                      dragProps,
                    }) => (
                      // write your building UI
                      <div className={style.upload__image_wrapper}>
                        {imageList.length == 0 ? (
                          <button
                            onClick={onImageUpload}
                            className={style.image_drop_area}
                            {...dragProps}
                          >
                            <img
                              src={profile}
                              className={style.profile_image}
                              alt=""
                            />
                          </button>
                        ) : (
                          <></>
                        )}

                        {imageList.map((image, index) => (
                          <div key={index} className="image-item">
                            <img
                              src={image['data_url']}
                              alt="profile-image"
                              className={style.profile_image}
                            />
                            <div className="image-item__btn-wrapper">
                              <button onClick={() => onImageUpdate(index)}>
                                Update
                              </button>
                              <button onClick={() => onImageRemove(index)}>
                                Remove
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </ImageUploading>
                </div>
                <div className={style.input_field}>
                  <label className={style.label} htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    className={style.input}
                    name="name"
                    id="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    placeholder="Enter the name"
                  />

                  {formik.touched.name && formik.errors.name ? (
                    <span className={style.error}>{formik.errors.name}</span>
                  ) : null}
                </div>
                <div className={style.input_field}>
                  <label className={style.label} htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    className={style.input}
                    name="email"
                    id="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder="Enter the email id"
                  />

                  {formik.touched.email && formik.errors.email ? (
                    <span className={style.error}>{formik.errors.email}</span>
                  ) : null}
                </div>

                <div className={style.input_field}>
                  <label className={style.label} htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    className={style.input}
                    name="password"
                    id="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    placeholder="Enter the password"
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <span className={style.error}>
                      {formik.errors.password}
                    </span>
                  ) : null}
                </div>
                <div className={style.input_field}>
                  <label className={style.label} htmlFor="confirm_pwd">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className={style.input}
                    name="confirm_pwd"
                    id="confirm_pwd"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirm_pwd}
                    placeholder="Enter the confirmed Password"
                  />

                  {formik.touched.confirm_pwd && formik.errors.confirm_pwd ? (
                    <span className={style.error}>
                      {formik.errors.confirm_pwd}
                    </span>
                  ) : null}
                </div>
                <div className={style.registerBtn}>
                  <button
                    disabled={formik.isSubmitting}
                    type="submit"
                    className={`btn ${style.submitBtn}`}
                  >
                    Sign Up
                  </button>
                </div>
              </form>
              <h4>
                Already have an account ?
                <span
                  className={style.routeLink}
                  onClick={() => navigate('/signin')}
                >
                  &nbsp; Login
                </span>
              </h4>
            </div>
          </div>
          <div className={style.heroImgContainer}>
            <img src={authImage} className={style.heroImg} alt="heroImg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
