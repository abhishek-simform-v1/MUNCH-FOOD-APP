import { useState, useEffect } from "react";
import { Checkbox, ConfigProvider, Input, Select } from "antd";
import Button from "../../../../utils/buttons/Button";
import { Form } from "antd";
import SubTitle from "../../../../utils/Typography/SubTitle";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { selectCurrentRecipe } from "../../../../slices/recipeSlice";
import { RecipeInterface, UserInterface } from "../../../../slices/InitialData";
import style from "./style.module.css";
import {
  UPDATE_USER,
  selectLoadingUser,
  selectUser,
} from "../../../../slices/userSlice";
import { useNavigate } from "react-router-dom";

import ProfileUpload from "../../../../Authentication/ProfileUpload";
import BgUpload from "./BgUpload";
import { ToastContainer, toast } from "react-toastify";

const { TextArea } = Input;

const { Option } = Select;

const selectBefore = (
  <Select defaultValue="http://">
    <Option value="http://">http://</Option>
    <Option value="https://">https://</Option>
  </Select>
);

const selectAfter = (
  <Select defaultValue=".com">
    <Option value=".com">.com</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
);

export default function Profile() {
  const [profile, setProfile] = useState<string | null>(null);
  const [profileUrl, setProfileUrl] = useState<string | null>(null);
  const [profileBg, setProfileBg] = useState<string | null>(null);
  const [profileBgUrl, setProfileBgUrl] = useState<string | null>(null);
  const userLoading = useAppSelector(selectLoadingUser);
  const [componentDisabled, setComponentDisabled] = useState<boolean>(true);
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();
  const onFinish = (values) => {
    const updatedUser = {
      ...user,
      user_name: values.user_name,
      Web_site: values.Web_site,
      job_title: values.job_title,
      user_bio: values.user_bio,
    };
    toast.success("profile updated", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setComponentDisabled(true);
    dispatch(UPDATE_USER(updatedUser));
  };

  return (
    <>
      {userLoading ? (
        <p>...</p>
      ) : (
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "hsl(186.38297872340422, 21.86046511627907%, 66%)",
              fontFamily: "f_regular",
            },
          }}
        >
          <div className={style.profile_page}>
            <SubTitle align="center">profile</SubTitle>

            <img src={user?.user_image} className={style.profile_image} />
            <Checkbox
              checked={componentDisabled}
              onChange={(e) => setComponentDisabled(e.target.checked)}
            >
              Enable Editing
            </Checkbox>
            <Form
              name="dynamic_form_nest_item"
              layout="vertical"
              form={form}
              initialValues={user}
              disabled={componentDisabled}
              onFinish={onFinish}
              size={"large"}
              autoComplete="off"
            >
              <div>
                <Form.Item label="User name" name={"user_name"}>
                  <Input />
                </Form.Item>

                <Form.Item label="Web Site" name={"Web_site"}>
                  <Input
                    addonBefore={selectBefore}
                    addonAfter={selectAfter}
                    defaultValue="mysite"
                  />
                </Form.Item>
                <Form.Item label="Job Title" name={"job_title"}>
                  <Input />
                </Form.Item>

                <Form.Item label="User Bio" name={"user_bio"}>
                  <TextArea rows={4} />
                </Form.Item>
                <Form.Item>
                  <Button disabled={componentDisabled}>Update Profile</Button>
                </Form.Item>
              </div>
            </Form>
          </div>
        </ConfigProvider>
      )}
    </>
  );
}
