import * as Yup from "yup";

export const int = {
  profile_img: "",
  name: "",
  email: "",
  password: "",
  confirm_pwd: "",
};

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(15, "Name should contain atleat 15 characters!")
    .required("Name Required!"),
  email: Yup.string()
    .required("Email Required!")
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "Invaild Email Format!"
    ),

  password: Yup.string()
    .required("Password Required!")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*]).{8,}$/,
      "Password must contain at least 8 characters,including at least one uppercase letter, one lowercase letter, one digit, and one special character (!@#$%^&*)"
    ),
  confirm_pwd: Yup.string()
    .required("Required!")
    .oneOf(
      [Yup.ref("password"), ""],
      "Password and Confirm password does not match!"
    ),
});

export const loginValues = {
  email: "",
  password: "",
};

export const loginValidateSchema = Yup.object({
  email: Yup.string()
    .required("Email Required!")
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "Invaild Email Format!"
    ),
  password: Yup.string().required("Password Required!"),
});
