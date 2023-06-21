import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../../../hooks/hooks';
import useWindowSize from '../../../../../../hooks/useWindowSize';

import ImageContainer from './components/ImageContainer';
import IngredientsContainer from './components/IngredientsContainer';
import InstructionContainer from './components/InstructionContainer';
import NutrionContainer from './components/NutritionContainer';
import TitleContainer from './components/TitleContainer';
import style from './style.module.css';
import { Button } from 'antd';
import ButtonOutLine from '../../../../../../utils/buttons/ButtonOutLine';
import {
  DELETE_RECIPE,
  UPDATE_RECIPE,
  getRecipes,
  selectLoading,
  selectRecipes,
} from '../../../../../../slices/recipeSlice';
import Loader from '../../../../../../utils/loader/Loader';

const RecipeUiCard = () => {
  const windowSize = useWindowSize();
  const dispatch = useAppDispatch();
  const params = useParams();
  const state = useAppSelector(selectLoading);
  const data = useAppSelector(selectRecipes);
  const [recipe] = data.filter((recipe: any) => recipe.id == params.id);
  let id: string = recipe?.id!;
  const navigate = useNavigate();
  return (
    <>
      {!state ? (
        <>
          <>
            {windowSize.width > 1024 ? (
              <div className={style.main_container}>
                <div className={style.left_side}>
                  <ImageContainer recipe={recipe} />
                  <IngredientsContainer recipe={recipe} />
                </div>
                <div className={style.right_side}>
                  <TitleContainer recipe={recipe} />
                  <NutrionContainer recipe={recipe} />
                  <InstructionContainer recipe={recipe} />
                </div>
              </div>
            ) : (
              <div className={style.main_container}>
                <div className={style.left_side}>
                  <TitleContainer recipe={recipe} />
                  <ImageContainer recipe={recipe} />
                  <NutrionContainer recipe={recipe} />
                </div>
                <div className={style.right_side}>
                  <IngredientsContainer recipe={recipe} />
                  <InstructionContainer recipe={recipe} />
                </div>
              </div>
              // <>dfdf</>
            )}
          </>
          <ButtonOutLine
            onClick={() => {
              navigate('/');
            }}
          >
            go back
          </ButtonOutLine>
          <Button
            onClick={() => {
              navigate('/createrecipe');
            }}
          >
            Update
          </Button>
          <Button
            onClick={() => {
              dispatch(DELETE_RECIPE(id));
            }}
          >
            Delete{' '}
          </Button>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default RecipeUiCard;
