import style from "./RecipeCards.module.css";
import dish from "./../../../../../assets/dish_02.jpg";
import dish3 from "./../../../../../assets/dish_03.jpg";
import dish4 from "./../../../../../assets/dish_04.jpg";
import dish5 from "./../../../../../assets/dish_05.jpg";
import RecipeCard from "./RecipeCard";
import { useAppSelector } from "../../../../../hooks/hooks";
import {
  selectFilteredRecipes,
  selectRecipes,
} from "../../../../../slices/recipeSlice";
import { RecipeInterface } from "../../../../../slices/InitialData";
const RecipeCards = () => {
  const recipe = useAppSelector(selectRecipes);
  const filtered_recipes = useAppSelector(selectFilteredRecipes);
  return (
    <div className={style.recipe_card_cntainer}>
      {(filtered_recipes.length > 0 ? filtered_recipes : recipe).map(
        (recipe: RecipeInterface, index: number) => (
          <div key={index}>
            <RecipeCard recipe={recipe} />
          </div>
        )
      )}
    </div>
  );
};

export default RecipeCards;
