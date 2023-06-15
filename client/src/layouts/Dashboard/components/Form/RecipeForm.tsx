import { useState } from "react";
import { ConfigProvider } from "antd";
import Button from "../../../../utils/buttons/Button";
import { Form } from "antd";
import style from "./../style.module.css";
import SubTitle from "../../../../utils/Typography/SubTitle";
import { useAppDispatch } from "../../../../hooks/hooks";
import { CREATE_RECIPE } from "../../../../slices/Slice";
import ImageUpload from "./RecipeFormComponents/ImageUpload";
import Ingredients from "./RecipeFormComponents/Ingredients";
import Instructions from "./RecipeFormComponents/Instructions";
import Nutritions from "./RecipeFormComponents/Nutritions";
import PrepTime from "./RecipeFormComponents/PrepTime";
import RecipeName from "./RecipeFormComponents/RecipeName";
import RecipeCat from "./RecipeFormComponents/RecipeCat";
import { RecipeInterface } from "../../../../slices/InitialData";
import RecipeTitle from "./RecipeFormComponents/RecipeTag";
import ButtonOutLine from "../../../../utils/buttons/ButtonOutLine";

export default function RecipeForm() {
  const [images, setImages] = useState([]);
  const [form] = Form.useForm();
  const [next, setNext] = useState(false);
  const dispatch = useAppDispatch();

  const onFinish = (values: RecipeInterface) => {
    console.log(values);
    values.recipe_image = {
      url: images[0]["data_url"],
    };
    const date = new Date();
    dispatch(CREATE_RECIPE(values));
    form.resetFields();
    setNext(false);
  };
  const onNext = (values: any) => {
    values.length !== 0 ? setNext(true) : setNext(false);
  };
  const onPrev = () => {
    setNext(false);
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
      <div className={style.form_container}>
        <SubTitle align="center">Create Recipe</SubTitle>
        <Form
          name="dynamic_form_nest_item"
          layout="vertical"
          form={form}
          onFinish={onFinish}
          initialValues={{ ingredient_info: [""], instructions: [""] }}
          className={style.form_style}
          size={"large"}
          autoComplete="off"
        >
          {!next ? (
            <div className={style.form_header}>
              <ImageUpload setImages={setImages} images={images} />
              <div className={style.form_header_content}>
                <RecipeName />
                <RecipeTitle />
                <RecipeCat />
                <PrepTime />
                <Button onClick={() => onNext(images)}>next</Button>
              </div>
            </div>
          ) : (
            <div className={style.form_footer}>
              <Nutritions />
              <Ingredients />
              <Instructions />
              <div>
                <ButtonOutLine onClick={onPrev}>prev</ButtonOutLine>
                <Button>Create / Update Recipe</Button>
              </div>
            </div>
          )}
        </Form>
      </div>
    </ConfigProvider>
  );
}
