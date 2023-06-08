import React from "react";
import style from "./Recipe.module.css";
import RecipeInfoCard from "./components/RecipeUiCard";
import RecipeInfoText from "./components/RecipeUiText";
const RecipeUI = () => {
  return (
    <div className={style.mainContainer}>
      <RecipeInfoCard />
      <RecipeInfoText />
    </div>
  );
};

export default RecipeUI;
