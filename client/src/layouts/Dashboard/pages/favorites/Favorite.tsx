import React, { useEffect, useState } from "react";
import Sort from "../../../Site/components/RecipeSite/Filter/Sorting/Sort";
import Search from "../../../Site/components/RecipeSite/Filter/Search/Search";
import SortingByCatogary from "../../../Site/components/RecipeSite/Filter/SortingByCatogary/SortingByCatogary";
import { useAppSelector } from "../../../../hooks/hooks";
import {
  ADD_FILTERED_RECIPE,
  selectFilteredRecipes,
  selectLoading,
  selectRecipes,
} from "../../../../slices/recipeSlice";
import style from "./../../style/style.module.css";
import {
  ADD_RATED_RECIPE,
  selectRatedRecipes,
  selectUser,
} from "../../../../slices/userSlice";
import { useDispatch } from "react-redux";
import RecipeCards from "../../../Site/components/RecipeSite/SmallRecipeCard/RecipeCards";
import { RecipeInterface } from "../../../../slices/InitialData";
import Title from "../../../../utils/Typography/Title";
import SubTitle from "../../../../utils/Typography/SubTitle";
const Favorite = () => {
  const recipeLoading = useAppSelector(selectLoading);
  const filtered_recipes = useAppSelector(selectFilteredRecipes);
  const recipes = useAppSelector(selectRecipes);
  const dispatch = useDispatch();
  const user = useAppSelector(selectUser);
  const [recipeName, setRecipeName] = useState("");
  const filteredRecipes = filtered_recipes.filter((recipe: RecipeInterface) =>
    recipe?.recipe_name.toLowerCase().includes(recipeName.toLowerCase())
  );

  if (user) {
    dispatch(ADD_RATED_RECIPE(user.rated_recipes));
  }
  const rated_recipes = useAppSelector(selectRatedRecipes);
  useEffect(() => {
    const user_favorute = rated_recipes.map((rated_recipe: string) => {
      const [rated] = recipes.filter((recipe: RecipeInterface) => {
        return recipe.id === rated_recipe;
      });
      return rated;
    });
    dispatch(ADD_FILTERED_RECIPE(user_favorute || []));
  }, [recipes]);
  return (
    <>
      {recipeLoading ? (
        <>loading ... </>
      ) : (
        <div className={style.main_container}>
          <SubTitle>Favorites </SubTitle>
          <div className={style.sort_container}>
            <Search setRecipeName={setRecipeName} />
            <Sort recipes={recipes} />
            <SortingByCatogary recipes={recipes} likedComponent={true} />
          </div>
          <div className={style.sort_container}>
            <RecipeCards recipes={filteredRecipes} />
          </div>
        </div>
      )}
    </>
  );
};

export default Favorite;
