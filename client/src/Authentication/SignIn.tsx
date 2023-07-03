// import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import style from "./auth.module.css";
import { useFormik } from "formik";
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
import { int, loginValidateSchema } from "./validation/validationSchema";
import { ConfigProvider, Form, Input, Modal } from "antd";
import { useState } from "react";
import Button from "../utils/buttons/Button";
import Password from "antd/es/input/Password";
const SignIn = () => {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const handleResetPassword = (value) => {
    return new Promise((resolve, reject) => {
      sendPasswordResetEmail(auth, value.email)
        .then(() => {
          toast.success("Password Reset Link is sent to your email address");
          setOpen(false);
        })
        .catch((error) => {
          reject(error);
          toast.error("User Not Found");
        });
    });
  };

  const handleLogIn = async (values) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      await dispatch(getUser());
      await dispatch(getRecipes());
      dispatch(LOG_IN());
      toast.success("User Authenticated successfully 👌", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      toast.error("User Does Not Exist 🤯", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.auth_form}>
          <div className={style.formContainer}>
            <button
              className={`btn ${style.back_btn}`}
              onClick={() => navigate("/", { replace: true })}
            >
              Back
            </button>
            <div style={{ alignSelf: "center" }}>
              <SubTitle>Sign In</SubTitle>
            </div>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary:
                    "hsl(186.38297872340422, 21.86046511627907%, 66%)",
                  fontFamily: "f_regular",
                },
              }}
            >
              <Form
                layout="vertical"
                className={style.form}
                onFinish={handleLogIn}
              >
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
                <button
                  type="submit"
                  disabled={disabled}
                  className={`btn ${style.submitBtn}`}
                >
                  Sign In
                </button>
              </Form>
              <h4>
                <span className={style.routeLink} onClick={() => setOpen(true)}>
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
              <Modal
                title="Enter Your Email "
                centered
                open={open}
                footer={[]}
                onCancel={() => setOpen(false)}
                width={500}
              >
                <Form
                  id="modalForm"
                  layout="vertical"
                  onFinish={handleResetPassword}
                >
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
                  <Button>Send Link</Button>
                </Form>
              </Modal>
            </ConfigProvider>
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
// handleResetPassword(formik.values.email)
