// import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import style from "./auth.module.css";
import { useFormik } from "formik";
import { int, validationSchema } from "./validation/validationScema";
import { useEffect } from "react";
import { useAppDispatch } from "../hooks/hooks";
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
      <div className={style.formContainer}>
        <h1 className="title">Log in</h1>
        <form className={style.form} onSubmit={formik.handleSubmit}>
          <div className="inputField">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="input"
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
          <div className="inputField">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="input"
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
              Submit
            </button>
            <button className={`btn ${style.resetBtn}`} onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
        <h4>
          Don't have an account ?
          <span
            className="routeLink RegisterRoute"
            onClick={() => navigate("/signin")}
          >
            &nbsp;Register
          </span>
        </h4>
      </div>
      <div className={style.heroImgContainer}>
        {/* <img src={heroImg} className={style.heroImg} alt="heroImg" /> */}
      </div>
    </div>
  );
};

export default SignIn;
