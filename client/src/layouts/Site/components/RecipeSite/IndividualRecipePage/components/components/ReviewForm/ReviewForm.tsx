import { useState, useEffect } from "react";
import { ConfigProvider } from "antd";

import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { Form } from "antd";
import { useForm } from "antd/es/form/Form";
import { MinusCircleOutlined } from "@ant-design/icons";

import ButtonOutLine from "../../../../../../../../utils/buttons/ButtonOutLine";
import style from "./CommentFormStyle.module.css";
import TextArea from "antd/es/input/TextArea";
import FormItem from "antd/es/form/FormItem";
import Button from "../../../../../../../../utils/buttons/Button";

import { RecipeInterface } from "../../../../../../../../slices/InitialData";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../../../hooks/hooks";
import { selectUser } from "../../../../../../../../slices/userSlice";
import { UPDATE_RECIPE } from "../../../../../../../../slices/recipeSlice";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../../../../../../database/firebase-config";
import {
  getReviews,
  selectReview,
} from "../../../../../../../../slices/reviewSlice";
export default function ReviewForm(recipe: any) {
  const [form] = useForm();
  const [reviews, setReviews] = useState([]);
  const user = useAppSelector(selectUser);

  const { user_image, user_name } = user;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getReviews());
  }, []);
  const oldReviews = useAppSelector(selectReview);
  const onFinish = (values: any) => {
    values.review_user = user;
    // const updatedRecipe = {
    //   ...recipe,
    //   recipe: {
    //     ...recipe.recipe,
    //     recipe_review_info: values,
    //   },
    // };
    console.log(values);
    setReviews(values);
    console.log(oldReviews);
    console.log(recipe.recipe.id);
    setDoc(doc(db, "reviews", recipe.recipe.id), {
      reviews: [...oldReviews, values],
    }),
      // console.log("updated_recipe", updatedRecipe);

      form.resetFields();
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "hsl(186.38297872340422, 21.86046511627907%, 66%)",
          fontFamily: "f_regular",
        },
      }}
    >
      <div>
        <div>
          <img src="" />
        </div>
        <Form
          name="review_form"
          layout="vertical"
          form={form}
          onFinish={onFinish}
          size={"large"}
          autoComplete="off"
        >
          <FormItem
            rules={[{ required: false, message: "Missing fiber" }]}
            label="Reviews"
            validateTrigger={["onChange", "onBlur"]}
            name="recipe_review"
          >
            <TextArea placeholder="Enter Your Review " rows={4} />
          </FormItem>
          <Button>add Review</Button>
        </Form>
      </div>
    </ConfigProvider>
  );
}
