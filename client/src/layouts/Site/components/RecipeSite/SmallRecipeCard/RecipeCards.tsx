import style from "./RecipeCards.module.css";

import RecipeCard from "./RecipeCard";

import { RecipeInterface } from "../../../../../slices/InitialData";

const RecipeCards = ({ recipes }: any) => {
  return (
    <div className={style.recipe_card_cntainer}>
      {recipes.map((recipe: RecipeInterface, index: number) => (
        <div key={index}>
          <RecipeCard recipe={recipe} />
        </div>
      ))}
    </div>
  );
};

export default RecipeCards;
