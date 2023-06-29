import React, { useEffect, useState } from "react";
import Search from "./Search/Search";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/hooks";
import {
  ADD_FILTERED_RECIPE,
  getRecipes,
  selectRecipes,
} from "../../../../../slices/recipeSlice";
import { RecipeInterface } from "../../../../../slices/InitialData";
import style from "./../../../style/Recipes.module.css";
import Sort from "./Sorting/Sort";
import SortingByCatogary from "./SortingByCatogary/SortingByCatogary";
const Filter = () => {
  const dispatch = useAppDispatch();

  const [recipeName, setRecipeName] = useState("");

  const recipes = useAppSelector(selectRecipes);
  const filteredRecipes = recipes.filter((recipe: RecipeInterface) =>
    recipe.recipe_name.toLowerCase().includes(recipeName.toLowerCase())
  );
  useEffect(() => {
    dispatch(ADD_FILTERED_RECIPE(filteredRecipes));
  }, [recipeName]);

  return (
    <div className={style.sort_container}>
      <Search setRecipeName={setRecipeName} />
      <Sort recipes={recipes} />
      <SortingByCatogary recipes={recipes} />
    </div>
  );
};

export default Filter;
