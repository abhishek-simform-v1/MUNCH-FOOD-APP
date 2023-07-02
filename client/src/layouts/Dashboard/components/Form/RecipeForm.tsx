import { useState, useEffect } from 'react';
import { ConfigProvider } from 'antd';
import Button from '../../../../utils/buttons/Button';
import { Form } from 'antd';
import style from './../style.module.css';
import SubTitle from '../../../../utils/Typography/SubTitle';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import {
  ADD_CURRENT_RECIPE,
  CREATE_RECIPE,
  UPDATE_RECIPE,
  getRecipes,
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
import nextIcon from './../../../../assets/icons/goNext.svg';
import prevIcon from './../../../../assets/icons/goBack.svg';
import { selectUser } from '../../../../slices/userSlice';
import { useNavigate } from 'react-router-dom';

export default function RecipeForm() {
  // const [imageUrl, setImageUrl] = useState<string>();
  const [images, setImages] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const [form] = Form.useForm();
  const [next, setNext] = useState(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const current_recipe = useAppSelector(selectCurrentRecipe);
  const navigate = useNavigate();
  const onFinish = (values: RecipeInterface) => {
    values.creator = user;

    values.ingredient_info.map((ing) => {
      if (ing.ingredient_operation == undefined) {
        return (ing.ingredient_operation = '');
      }
    });
    if (current_recipe) {
      const update_recipe = {
        id: current_recipe.id,
        updated_recipe: values,
      };

      dispatch(UPDATE_RECIPE(update_recipe));
      dispatch(getRecipes());
      // navigate('/myrecipes', { replace: true });
    } else {
      dispatch(CREATE_RECIPE(values));
      dispatch(getRecipes());
    }
    form.resetFields();
    setImages(null);
    setImageUrl(null);
    setNext(false);
  };

  const onNext = () => {
    if (current_recipe) {
      setNext(true);
    } else {
      images!.length !== 0 ? setNext(true) : setNext(false);
    }
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
          initialValues={
            current_recipe
              ? current_recipe
              : { ingredient_info: [''], instructions: [''] }
          }
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
              setImages={setImages}
              setImageUrl={setImageUrl}
              images={images}
              imageUrl={imageUrl}
              form={form}
              current_img={current_recipe?.recipe_image}
            />
            <div className={style.form_header_content}>
              <RecipeName />
              <RecipeTitle />
              <RecipeCat />
              <PrepTime />
              <ButtonOutLine padding="0.5rem 0.5rem" onClick={() => onNext()}>
                <img src={nextIcon} />
              </ButtonOutLine>
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
            <div className={style.btn_container}>
              <ButtonOutLine padding="0.5rem 0.5rem" onClick={onPrev}>
                <img src={prevIcon} />
              </ButtonOutLine>
              <Button>
                {current_recipe ? 'Update Recipe' : 'Create Recipe'}
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </ConfigProvider>
  );
}
