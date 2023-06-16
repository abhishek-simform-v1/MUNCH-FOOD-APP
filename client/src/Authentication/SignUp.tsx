import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";
import style from "./auth.module.css";
import { useFormik } from "formik";
// import { useState } from "react";
import { int, validationSchema } from "./validation/validationScema";
import Title from "../utils/Typography/Title";
import ImageUploading from "react-images-uploading";
import authImage from "./../assets/cooking-animate.svg";
import profile from "./../assets/icons/signinprofile.svg";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../database/firebase-config";
const SignUp = () => {
  const handleSignUp = () => {
    console.log("first");
    console.log(formik.values.email, formik.values.password);
    if (formik.isSubmitting) {
      toast.promise(
        () => new Promise((resolve) => setTimeout(resolve, 1000)),
        {
          pending: "Creating User",
        },
        {
          position: "top-center",
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
    createUserWithEmailAndPassword(
      auth,
      formik.values.email,
      formik.values.confirm_pwd
    )
      .then((res) => {
        navigate("/");
        return (
          toast.success("User Created", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }),
          formik.resetForm()
        );
      })
      .catch((err) => {
        formik.resetForm();
        return toast.error("User already Exist", {
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
  };

  const formik = useFormik({
    initialValues: int,
    validationSchema: validationSchema,
    onSubmit: handleSignUp,
  });

  const handleReset = () => {
    formik.resetForm();
  };
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;

  const onChange = (imageList: any, addUpdateIndex: any) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const navigate = useNavigate();

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
              <div style={{ alignSelf: "center" }}>
                <Title>Sign Up</Title>
              </div>

              <form className={style.form} onSubmit={formik.handleSubmit}>
                <div className="inputFile">
                  <ImageUploading
                    multiple
                    value={images}
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
                              src={image["data_url"]}
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
                  onClick={() => navigate("/signin")}
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
