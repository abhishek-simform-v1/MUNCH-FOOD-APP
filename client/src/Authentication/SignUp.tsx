import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import style from "./auth.module.css";
import { useFormik } from "formik";
import { useState } from "react";
import { int, validationSchema } from "./validation/validationScema";
import Title from "../utils/Typography/Title";
import ImageUploading from "react-images-uploading";
import profile from "./../assets/icons/signinprofile.svg";
import ReactImageUploading from "react-images-uploading";
import Paragraph from "../utils/Typography/Paragraph";
const SignUp = () => {
  const [file, setFile] = useState("");
  const handleSignUp = () => {
    console.log(formik.values.email, formik.values.phone_number);
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
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const navigate = useNavigate();

  return (
    <div className={style.container}>
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
                        <Paragraph>update Profile</Paragraph>
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
              <label htmlFor="name">Name</label>
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
              <label htmlFor="email">Email</label>
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
              <label htmlFor="phone_number">Phone No</label>
              <input
                type="text"
                className={style.input}
                name="phone_number"
                id="phone_number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone_number}
                placeholder="Enter the phone number"
              />

              {formik.touched.phone_number && formik.errors.phone_number ? (
                <span className={style.error}>
                  {formik.errors.phone_number}
                </span>
              ) : null}
            </div>
            <div className={style.input_field}>
              <label htmlFor="password">Password</label>
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
            <div className={style.input_field}>
              <label htmlFor="confirm_pwd">Confirm Password</label>
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
                <span className={style.error}>{formik.errors.confirm_pwd}</span>
              ) : null}
            </div>
            <div className={style.registerBtn}>
              <button type="submit" className={`btn ${style.submitBtn}`}>
                Submit
              </button>
              <button onClick={handleReset} className={`btn ${style.resetBtn}`}>
                Reset
              </button>
            </div>
          </form>
          <h4>
            Already have an account ?
            <span className="routeLink" onClick={() => navigate("/")}>
              &nbsp; Login
            </span>
          </h4>
        </div>
        <div className={style.heroImgContainer}>
          {/* <img src={heroImg} className={style.heroImg} alt="heroImg" /> */}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
