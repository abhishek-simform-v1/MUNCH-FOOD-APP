// import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import style from "./auth.module.css";
import { useFormik } from "formik";
import { int, loginValidateSchema } from "./validation/validationScema";
import authImage from "./../assets/signin.jpg";

import { ToastContainer, toast } from "react-toastify";

import { useAppDispatch } from "../hooks/hooks";
import Title from "../utils/Typography/Title";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../database/firebase-config";
import { LOG_IN, getUser } from "../slices/userSlice";
import SubTitle from "../utils/Typography/SubTitle";
import { getRecipes } from "../slices/recipeSlice";
const SignIn = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const handleResetPassword = (value) => {
    let email = value;

    sendPasswordResetEmail(auth, email)
      .then(() => toast("Reset Password Link Sent Successfully"))
      .catch((err) => {
        toast(err.message);
      });
  };
  const handleLogIn = () => {
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
    signInWithEmailAndPassword(
      auth,
      formik.values.email,
      formik.values.password
    )
      .then(async (res) => {
        dispatch(getUser());
        dispatch(getRecipes());
        dispatch(LOG_IN());

        // return formik.resetForm();
      })
      .catch((err) => {
        throw (
          (new Error(err),
          toast.error("User does not Exist", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }))
        );
      });
  };

  const formik = useFormik({
    initialValues: int,
    validationSchema: loginValidateSchema,
    onSubmit: handleLogIn,
  });

  return (
    <div className={style.container}>
      <ToastContainer />
      <div className={style.wrapper}>
        <div className={style.auth_form}>
          <div className={style.formContainer}>
            <div style={{ alignSelf: "center" }}>
              <SubTitle>Sign In</SubTitle>
            </div>
            <form className={style.form} onSubmit={formik.handleSubmit}>
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
                  <span className={style.error}>{formik.errors.password}</span>
                ) : null}
              </div>
              <div className={style.registerBtn}>
                <button className={`btn ${style.submitBtn}`} type="submit">
                  Sign In
                </button>
              </div>
            </form>
            <h4>
              <span
                className={style.routeLink}
                onClick={() => handleResetPassword(formik.values.email)}
              >
                Forgot PassWord?
              </span>
            </h4>
            <h4>
              Don't have an account ?
              <span
                className={style.routeLink}
                onClick={() => navigate("/signup")}
              >
                &nbsp;Register
              </span>
            </h4>
          </div>
        </div>
        <div className={style.heroImgContainer}>
          <img src={authImage} className={style.heroImg} alt="heroImg" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
