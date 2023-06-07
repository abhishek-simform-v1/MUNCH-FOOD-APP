import React from "react";
import style from "./Recipe.module.css";
import RecipeInfoCard from "./components/RecipeInfoCard";
import RecipeInfoText from "./components/RecipeInfoText";
const RecipeInfo = () => {
  return (
    <div className={style.mainContainer}>
      <RecipeInfoCard />
      <RecipeInfoText />
    </div>
  );
};

export default RecipeInfo;
