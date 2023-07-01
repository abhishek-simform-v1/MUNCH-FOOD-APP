import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../../../hooks/hooks';
import useWindowSize from '../../../../../../hooks/useWindowSize';
import ImageContainer from './components/ImageContainer';
import IngredientsContainer from './components/IngredientsContainer';
import InstructionContainer from './components/InstructionContainer';
import NutritionContainer from './components/NutritionContainer';
import TitleContainer from './components/TitleContainer';
import style from './style.module.css';
import { Button } from 'antd';
import ButtonOutLine from '../../../../../../utils/buttons/ButtonOutLine';
import {
  ADD_CURRENT_RECIPE,
  DELETE_RECIPE,
  UPDATE_RECIPE,
  getRecipes,
  selectLoading,
  selectRecipes,
} from '../../../../../../slices/recipeSlice';
import Loader from '../../../../../../utils/loader/Loader';
import { selectReview } from '../../../../../../slices/reviewSlice';
import goBack from './../../../../../../assets/icons/goBack.svg';
import Paragraph from '../../../../../../utils/Typography/Paragraph';
import RatingComponent from './components/ReviewForm/RatingComponent';
import ReviewForm from './components/ReviewForm/ReviewForm';
import { selectUser } from '../../../../../../slices/userSlice';
import { Rating } from 'react-simple-star-rating';
import { useState } from 'react';
import SignupModal from '../../../../../../Authentication/SignupModal';

const RecipeUiCard = () => {
  const windowSize = useWindowSize();
  const [rating, setRating] = useState(0);
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const params = useParams();
  const state = useAppSelector(selectLoading);
  const data = useAppSelector(selectRecipes);
  const [recipe] = data.filter((recipe: any) => recipe.id == params.id);
  let id: string = recipe?.id!;
  console.log(rating);
  const navigate = useNavigate();
  return (
    <>
      {!state ? (
        <>
          <>
            <div>
              <ButtonOutLine
                onClick={() => {
                  navigate(-1);
                }}
              >
                <img src={goBack} />
              </ButtonOutLine>
            </div>
            {windowSize.width > 1024 ? (
              <div className={style.main_container}>
                <div className={style.left_side}>
                  <ImageContainer recipe={recipe} />
                  <IngredientsContainer recipe={recipe} />
                </div>
                <div className={style.right_side}>
                  <TitleContainer recipe={recipe} />
                  <NutritionContainer recipe={recipe} />
                  <InstructionContainer recipe={recipe} />
                </div>
              </div>
            ) : (
              <div className={style.main_container}>
                <div className={style.left_side}>
                  {/* <TitleContainer recipe={recipe} /> */}
                  <ImageContainer recipe={recipe} />
                  <NutritionContainer recipe={recipe} />
                </div>
                <div className={style.right_side}>
                  <IngredientsContainer recipe={recipe} />
                  <InstructionContainer recipe={recipe} />
                </div>
              </div>
              // <>dfdf</>
            )}
          </>
          {user ? <RatingComponent recipe={recipe} /> : <></>}

          <ReviewForm recipe={recipe} />

          {user && recipe.creator.id === user.id ? (
            <Button
              onClick={() => {
                dispatch(ADD_CURRENT_RECIPE(recipe));

                navigate('/createrecipe');
              }}
            >
              Update
            </Button>
          ) : (
            <></>
          )}
          {user && recipe.creator.id === user.id ? (
            <Button
              onClick={() => {
                navigate(-1);

                dispatch(DELETE_RECIPE(id));
                dispatch(getRecipes());
              }}
            >
              Delete{' '}
            </Button>
          ) : (
            <></>
          )}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default RecipeUiCard;
