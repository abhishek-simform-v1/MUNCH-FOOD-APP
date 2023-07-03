import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";
import style from "./auth.module.css";
import { useFormik } from "formik";
// import { useState } from "react";
import Title from "../utils/Typography/Title";
import ImageUploading from "react-images-uploading";
import authImage from "./../assets/signin.jpg";
import profileIcon from "./../assets/icons/signinprofile.svg";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { app, auth, db, imageStore } from "../database/firebase-config";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useAppDispatch } from "../hooks/hooks";
import { LOG_IN } from "../slices/userSlice";
import SubTitle from "../utils/Typography/SubTitle";
import { Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import ProfileUpload from "./ProfileUpload";
import Button from "../utils/buttons/Button";
type imageType = {
  data_url: string;
  file: File;
};
const SignUp = () => {
  const [profile, setProfile] = useState<string | null>(null);
  const [profileUrl, setProfileUrl] = useState<string | null>(null);
  const [form] = Form.useForm();
  const [disabled, setDisabled] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleSignUp = (values) => {
    if (profileUrl === null) {
      console.log(profileUrl);
      toast.error("Please Upload User Image", {
        position: "top-left",
        autoClose: 2500,
        hideProgressBar: false,
        toastId: "success1",
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      return;
    } else {
      values.user_image = profileUrl;
      const creating_user = createUserWithEmailAndPassword(
        auth,
        values.email,
        values.confirm_pwd
      )
        .then((cred) => {
          navigate(-1);
          return (
            setDoc(doc(db, "users", cred.user.uid), {
              user_name: values.email,
              user_email: values.confirm_pwd,
              user_image: profileUrl,
              user_bg_img: "",
              Web_site: "",
              user_bio: "",
              job_title: "",
              saved_recipes: [],
              rated_recipes: [],
              created_recipes: [],
            }),
            dispatch(LOG_IN()),
            form.resetFields()
          );
        })
        .catch((err) => {});
      toast.promise(
        creating_user,
        {
          pending: "Creating User",
          success: "User Created successfully 👌",
          error: "User already Exist 🤯",
        },
        {
          position: "top-center",
          autoClose: 2500,
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
    <>
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.auth_form}>
            <div className={style.formContainer}>
              <div style={{ alignSelf: "center" }}>
                <SubTitle>Sign Up</SubTitle>
              </div>
              <button
                className={`btn ${style.back_btn}`}
                onClick={() => navigate("/", { replace: true })}
              >
                Back
              </button>
              <Form
                layout="vertical"
                className={style.form}
                onFinish={handleSignUp}
              >
                <Form.Item
                  name="user_image"

                  // label="Recipe Image"
                >
                  <ProfileUpload
                    setProfile={setProfile}
                    setProfileUrl={setProfileUrl}
                    profile={profile}
                    profileUrl={profileUrl}
                    form={form}
                    setDisabled={setDisabled}
                    current_img={profileIcon}
                  />
                </Form.Item>
                <Form.Item
                  name="user_name"
                  label="User Name"
                  rules={[
                    {
                      required: true,
                      message: "profile name required",
                    },
                  ]}
                >
                  <Input
                    type="text"
                    className={style.input}
                    placeholder="Enter the name"
                  />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="E-mail"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!",
                    },
                  ]}
                >
                  <Input className={style.input} placeholder="Enter Email" />
                </Form.Item>

                <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                  hasFeedback
                >
                  <Input.Password className={style.input} placeholder="*****" />
                </Form.Item>

                <Form.Item
                  name="confirm_pwd"
                  label="Confirm Password"
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            "The new password that you entered do not match!"
                          )
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password className={style.input} placeholder="*****" />
                </Form.Item>
                <button
                  type="submit"
                  disabled={disabled}
                  className={`btn ${style.submitBtn}`}
                >
                  Sign Up
                </button>
              </Form>
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
