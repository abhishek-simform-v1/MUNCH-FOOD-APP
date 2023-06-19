import { useEffect } from "react";
import MainContainer from "../../../utils/containers/MainContainer";
import RecipeUiCard from "../components/RecipeSite/components/RecipeUiCard";
import { getRecipes } from "../../../slices/recipeSlice";
import { useAppDispatch } from "../../../hooks/hooks";

const Recipe = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, []);
  return (
    <>
      {/* <Header /> */}
      <MainContainer>
        <RecipeUiCard />
      </MainContainer>
    </>
  );
};

export default Recipe;
