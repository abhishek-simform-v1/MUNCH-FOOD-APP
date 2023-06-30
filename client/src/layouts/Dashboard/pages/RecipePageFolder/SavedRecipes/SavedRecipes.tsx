import React, { useEffect, useState } from "react";

import style from "./../../../style/style.module.css";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/hooks";
import {
  ADD_FILTERED_RECIPE,
  selectFilteredRecipes,
  selectLoading,
  selectRecipes,
} from "../../../../../slices/recipeSlice";
import {
  ADD_SAVED_RECIPE,
  selectSavedRecipes,
  selectUser,
} from "../../../../../slices/userSlice";
import { RecipeInterface } from "../../../../../slices/InitialData";
import SubTitle from "../../../../../utils/Typography/SubTitle";
import Search from "../../../../Site/components/RecipeSite/Filter/Search/Search";
import Sort from "../../../../Site/components/RecipeSite/Filter/Sorting/Sort";
import SortingByCatogary from "../../../../Site/components/RecipeSite/Filter/SortingByCatogary/SortingByCatogary";
import RecipeCards from "../../../../Site/components/RecipeSite/SmallRecipeCard/RecipeCards";

const SavedRecipes = () => {
  const recipeLoading = useAppSelector(selectLoading);
  const filtered_recipes = useAppSelector(selectFilteredRecipes);
  const recipes = useAppSelector(selectRecipes);
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const [recipeName, setRecipeName] = useState("");
  const filteredRecipes = filtered_recipes.filter((recipe: RecipeInterface) =>
    recipe?.recipe_name.toLowerCase().includes(recipeName.toLowerCase())
  );

  if (user) {
    dispatch(ADD_SAVED_RECIPE(user.saved_recipes));
  }
  const saved_recipes = useAppSelector(selectSavedRecipes);
  useEffect(() => {
    const user_saved = saved_recipes.map((saved_recipe: string) => {
      const [rated] = recipes.filter((recipe: RecipeInterface) => {
        return recipe.id === saved_recipe;
      });
      return rated;
    });
    dispatch(ADD_FILTERED_RECIPE(user_saved || []));
  }, [recipes]);
  return (
    <>
      {recipeLoading ? (
        <>loading ... </>
      ) : (
        <div className={style.main_container}>
          <SubTitle>Collection </SubTitle>
          <div className={style.sort_container}>
            <Search setRecipeName={setRecipeName} />
            <Sort recipes={recipes} />
            <SortingByCatogary recipes={recipes} savedRecipes={true} />
          </div>
          <div className={style.sort_container}>
            <RecipeCards recipes={filteredRecipes} />
          </div>
        </div>
      )}
    </>
  );
};

export default SavedRecipes;
