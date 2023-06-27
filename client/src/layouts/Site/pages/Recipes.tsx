import { useState } from "react";
import MainContainer from "../../../utils/containers/MainContainer";
import { useAppDispatch } from "../../../hooks/hooks";
import Header from "../../../shared/navbar/Header";
import style from "./../style/Recipes.module.css";
import SortingByCatogary from "../components/RecipeSite/Filter/SortingByCatogary/SortingByCatogary";
import Search from "../components/RecipeSite/Filter/Search/Search";
import Sort from "../components/RecipeSite/Filter/Sorting/Sort";
import RecipeCards from "../components/RecipeSite/SmallRecipeCard/RecipeCards";
const Recipes = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      style={{
        marginTop: "120px",
      }}
    >
      <Header />
      <MainContainer>
        <div className={style.sort_container}>
          <Search />
          <Sort />
          <SortingByCatogary />
        </div>
        <RecipeCards />
      </MainContainer>
    </div>
  );
};

export default Recipes;
