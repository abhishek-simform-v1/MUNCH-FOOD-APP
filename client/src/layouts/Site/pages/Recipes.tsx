import { useEffect, useState } from "react";
import MainContainer from "../../../utils/containers/MainContainer";
import RecipesUI from "../components/RecipesSite/RecipesUI";
import { useAppDispatch } from "../../../hooks/hooks";
import { getRecipes } from "../../../slices/recipeSlice";
import axios from "axios";
import Recipe from "./Recipe";
import Header from "../../../shared/navbar/Header";

const Recipes = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Header />
      <MainContainer>
        <RecipesUI />
      </MainContainer>
    </>
  );
};

export default Recipes;
