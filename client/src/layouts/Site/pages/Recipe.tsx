import { useEffect } from "react";
import MainContainer from "../../../utils/containers/MainContainer";
import RecipeUiCard from "../components/RecipeSite/IndividualRecipePage/components/RecipeUiCard";
import { getRecipes } from "../../../slices/recipeSlice";
import { useAppDispatch } from "../../../hooks/hooks";
import Header from "../../../shared/navbar/Header";

const Recipe = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, []);
  return (
    <div
      style={{
        marginTop: "120px",
      }}
    >
      <MainContainer>
        <RecipeUiCard />
      </MainContainer>
    </div>
  );
};

export default Recipe;
