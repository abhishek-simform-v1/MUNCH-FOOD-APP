import { useState } from "react";
import MainContainer from "../../../utils/containers/MainContainer";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import Header from "../../../shared/navbar/Header";
import style from "./../style/Recipes.module.css";
import SortingByCatogary from "../components/RecipeSite/Filter/SortingByCatogary/SortingByCatogary";
import Search from "../components/RecipeSite/Filter/Search/Search";
import Sort from "../components/RecipeSite/Filter/Sorting/Sort";
import RecipeCards from "../components/RecipeSite/SmallRecipeCard/RecipeCards";
import {
  selectFilteredRecipes,
  selectRecipes,
} from "../../../slices/recipeSlice";
import Filter from "../components/RecipeSite/Filter/Filter";
const Recipes = () => {
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const recipes = useAppSelector(selectRecipes);

  const filtered_recipes = useAppSelector(selectFilteredRecipes);
  return (
    <div
      style={{
        marginTop: "120px",
      }}
    >
      <Header />
      <MainContainer>
        <Filter />
        <RecipeCards recipes={filtered_recipes} />
      </MainContainer>
    </div>
  );
};

export default Recipes;
