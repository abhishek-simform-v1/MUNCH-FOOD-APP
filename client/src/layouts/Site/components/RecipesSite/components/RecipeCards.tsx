import style from "./RecipeCards.module.css";
import dish from "./../../../../../assets/dish_02.jpg";
import dish3 from "./../../../../../assets/dish_03.jpg";
import dish4 from "./../../../../../assets/dish_04.jpg";
import dish5 from "./../../../../../assets/dish_05.jpg";
import RecipeCard from "./RecipeCard";
import { useAppSelector } from "../../../../../hooks/hooks";
const RecipeCards = () => {
  const recipe = useAppSelector((state) => state.recipe.recipes);

  return (
    <div className={style.recipe_card_cntainer}>
      {recipe.map((recipe) => (
        <RecipeCard recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeCards;
