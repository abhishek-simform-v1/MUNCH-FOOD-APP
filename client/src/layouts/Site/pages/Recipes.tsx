import { useEffect, useState } from "react";
import MainContainer from "../../../utils/containers/MainContainer";
import RecipesUI from "../components/RecipesSite/RecipesUI";
import { useAppDispatch } from "../../../hooks/hooks";
import { getRecipes } from "../../../slices/recipeSlice";
import axios from "axios";
import Recipe from "./Recipe";

const Recipes = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getRecipes());
        setIsLoading(false);
      } catch (error) {
        // Handle error
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <MainContainer>
      <RecipesUI />
    </MainContainer>
  );
};

export default Recipes;
