import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/hooks";
import useWindowSize from "../../../../../hooks/useWindowSize";

import ImageContainer from "./components/ImageContainer";
import IngredientsContainer from "./components/IngredientsContainer";
import InstructionContainer from "./components/InstructionContainer";
import NutrionContainer from "./components/NutritionContainer";
import TitleContainer from "./components/TitleContainer";
import style from "./style.module.css";
import NutritionContainer from "./components/NutritionContainer";
const RecipeUiCard = () => {
  const windowSize = useWindowSize();
  // const dispatch = useAppDispatch();
  // const state = useAppSelector((state) => state.recipe.recipes);
  const params = useParams();
  const recipes = useAppSelector((state) => state.recipe.recipes);
  return (
    <>
      {windowSize.width > 1024 ? (
        <div className={style.main_container}>
          <div className={style.left_side}>
            <ImageContainer id={params} recipes={recipes} />
            <IngredientsContainer id={params} recipes={recipes} />
          </div>
          <div className={style.right_side}>
            <TitleContainer id={params} recipes={recipes} />
            <NutrionContainer id={params} recipes={recipes} />
            <InstructionContainer id={params} recipes={recipes} />
          </div>
        </div>
      ) : (
        <div className={style.main_container}>
          <div className={style.left_side}>
            <TitleContainer id={params} recipes={recipes} />
            <ImageContainer id={params} recipes={recipes} />
            <NutritionContainer id={params} recipes={recipes} r />
          </div>
          <div className={style.right_side}>
            <IngredientsContainer id={params} recipes={recipes} />
            <InstructionContainer id={params} recipes={recipes} />
          </div>
        </div>
      )}
    </>
  );
};

export default RecipeUiCard;
