import React from "react";
import style from "./Recipe.module.css";
import RecipeUiCard from "./components/RecipeUiCard";

const RecipeUI = () => {
  return (
    <div className={style.mainContainer}>
      <RecipeUiCard />
    </div>
  );
};

export default RecipeUI;
