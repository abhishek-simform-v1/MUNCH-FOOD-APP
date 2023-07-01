import * as Yup from 'yup';

export const int = {
  name: '',
  email: '',
  password: '',
  confirm_pwd: '',
};

export const loginValues = {
  email: '',
  password: '',
};

export const loginValidateSchema = Yup.object({
  email: Yup.string()
    .required('Email Required!')
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      'Invaild Email Format!'
    ),
  password: Yup.string().required('Password Required!'),
});
