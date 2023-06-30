import { useEffect, useState } from "react";
import MainContainer from "../../../utils/containers/MainContainer";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import Header from "../../../shared/navbar/Header";
import style from "./../style/Recipes.module.css";
import SortingByCatogary from "../components/RecipeSite/Filter/SortingByCatogary/SortingByCatogary";
import Search from "../components/RecipeSite/Filter/Search/Search";
import Sort from "../components/RecipeSite/Filter/Sorting/Sort";
import RecipeCards from "../components/RecipeSite/SmallRecipeCard/RecipeCards";
import {
  getRecipes,
  selectFilteredRecipes,
  selectLoading,
  selectRecipes,
} from "../../../slices/recipeSlice";
import Filter from "../components/RecipeSite/Filter/Filter";
import BigRecipeCard from "../components/RecipeSite/BigRecipeCard/BigRecipeCard";
const Recipes = () => {
  const dispatch = useAppDispatch();

  const filtered_recipes = useAppSelector(selectFilteredRecipes);
  useEffect(() => {
    dispatch(getRecipes());
    console.log("firstHello");
  }, []);
  const loading = useAppSelector(selectLoading);
  return (
    <div
      style={{
        marginTop: "120px",
      }}
    >
      {loading ? (
        <h1>loading</h1>
      ) : (
        <>
          <Header />
          <MainContainer>
            <BigRecipeCard />
            <Filter />
            <RecipeCards recipes={filtered_recipes} />
          </MainContainer>
        </>
      )}
    </div>
  );
};

export default Recipes;
