import RecipeCards from "./components/RecipeCards";
import style from "./components/RecipeCards.module.css";
const RecipesUI = () => {
  return (
    <div className={style.recipe_card_container}>
      <RecipeCards />
    </div>
  );
};

export default RecipesUI;
