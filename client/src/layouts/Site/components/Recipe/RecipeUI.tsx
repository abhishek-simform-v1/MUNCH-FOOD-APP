import React from "react";
import style from "./Recipe.module.css";
import RecipeInfoCard from "./components/RecipeUiCard";

const RecipeUI = () => {
  return (
    <div className={style.mainContainer}>
      <RecipeInfoCard />
    </div>
  );
};

export default RecipeUI;
