import { useState, useEffect } from 'react';
import { ConfigProvider } from 'antd';
import Button from '../../../../utils/buttons/Button';
import { Form } from 'antd';
import style from './../style.module.css';
import SubTitle from '../../../../utils/Typography/SubTitle';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import {
  CREATE_RECIPE,
  selectCurrentRecipe,
} from '../../../../slices/recipeSlice';
import ImageUpload from './RecipeFormComponents/ImageUpload';
import Ingredients from './RecipeFormComponents/Ingredients';
import Instructions from './RecipeFormComponents/Instructions';
import Nutritions from './RecipeFormComponents/Nutritions';
import PrepTime from './RecipeFormComponents/PrepTime';
import RecipeName from './RecipeFormComponents/RecipeName';
import RecipeCat from './RecipeFormComponents/RecipeCat';
import { RecipeInterface } from '../../../../slices/InitialData';
import RecipeTitle from './RecipeFormComponents/RecipeTag';
import ButtonOutLine from '../../../../utils/buttons/ButtonOutLine';
import { imageStore } from '../../../../database/firebase-config';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { v4 } from 'uuid';
import { useForm } from 'antd/es/form/Form';
import { LOG_OUT, selectUser } from '../../../../slices/userSlice';

export default function RecipeForm() {
  const [imageUrl, setImageUrl] = useState<string>();
  const [images, setImages] = useState<any>();
  const [form] = Form.useForm();
  const [next, setNext] = useState(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const current_recipe = useAppSelector(selectCurrentRecipe);

  const onFinish = (values: RecipeInterface) => {
    console.log(user);
    if (images.length === 0) {
      return;
    } else {
      const imageRef = ref(imageStore, `images/recipeImage${v4()}}`);
      uploadString(imageRef, images[0].data_url, 'data_url')
        .then((snapshot) => {
          console.log('Uploaded a data_url string!');
        })
        .then(() =>
          getDownloadURL(imageRef).then((downloadURL) => {
            values.recipe_image = downloadURL;
            values.creator = user;
            console.log(values);
            dispatch(CREATE_RECIPE(values));
            form.resetFields();
            setNext(false);
            setImageUrl(downloadURL);
          })
        )
        .catch(() => console.log('first'));
      console.log(values);
      // const date = new Date();
    }
  };
  const onNext = () => {
    images[0].data_url.length !== 0 ? setNext(true) : setNext(false);
  };
  const onPrev = () => {
    setNext(false);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: 'hsl(186.38297872340422, 21.86046511627907%, 66%)',
          fontFamily: 'f_regular',
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
          initialValues={current_recipe}
          className={style.form_style}
          size={'large'}
          autoComplete="off"
        >
          <div
            className={
              next ? `${style.form_header} hide` : `${style.form_header}`
            }
          >
            <ImageUpload
              images={images}
              setImages={setImages}
              setImageUrl={setImageUrl}
              imageUrl={imageUrl}
              updateUrl={current_recipe?.recipe_image}
            />
            <div className={style.form_header_content}>
              <RecipeName />
              <RecipeTitle />
              <RecipeCat />
              <PrepTime />
              <Button onClick={() => onNext()}>next</Button>
            </div>
          </div>
          <div
            className={
              next ? `${style.form_footer} ` : `${style.form_header} hide`
            }
          >
            <Nutritions />
            <Ingredients />
            <Instructions />
            <div>
              <ButtonOutLine onClick={onPrev}>prev</ButtonOutLine>
              <Button>Create / Update Recipe</Button>
            </div>
          </div>
        </Form>
      </div>
    </ConfigProvider>
  );
}
