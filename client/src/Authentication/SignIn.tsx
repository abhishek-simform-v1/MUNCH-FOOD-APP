// import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import style from "./auth.module.css";
import { useFormik } from "formik";
import { int, validationSchema } from "./validation/validationScema";
import authImage from "./../assets/siginSvg.svg";

import { useAppDispatch } from "../hooks/hooks";
import Title from "../utils/Typography/Title";
const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogIn = async () => {
    console.log(formik.values);
  };
  const handleReset = () => {
    formik.resetForm();
  };
  const formik = useFormik({
    initialValues: int,
    validationSchema: validationSchema,
    onSubmit: handleLogIn,
  });

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.auth_form}>
          <div className={style.formContainer}>
            <div style={{ alignSelf: "center" }}>
              <Title>Sign In</Title>
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
