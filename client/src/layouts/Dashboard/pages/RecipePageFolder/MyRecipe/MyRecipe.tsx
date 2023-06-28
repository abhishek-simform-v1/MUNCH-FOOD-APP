import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../../../hooks/hooks";
import {
  ADD_FILTERED_RECIPE,
  getRecipes,
  selectFilteredRecipes,
  selectLoading,
  selectRecipes,
} from "../../../../../slices/recipeSlice";
import Search from "../../../../Site/components/RecipeSite/Filter/Search/Search";
import SortingByCatogary from "../../../../Site/components/RecipeSite/Filter/SortingByCatogary/SortingByCatogary";
import { useEffect, useState } from "react";
import {
  ADD_CREATED_RECIPE,
  ADD_RATED_RECIPE,
  selectRatedRecipes,
  selectUser,
} from "../../../../../slices/userSlice";
import { RecipeInterface } from "../../../../../slices/InitialData";
import Sort from "../../../../Site/components/RecipeSite/Filter/Sorting/Sort";
import SubTitle from "../../../../../utils/Typography/SubTitle";
import RecipeCards from "../../../../Site/components/RecipeSite/SmallRecipeCard/RecipeCards";
import style from "./../../../style/style.module.css";
const MyRecipe = () => {
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
    let my_recipes = recipes.filter((recipe) => recipe.creator.id == user.id);

    dispatch(ADD_CREATED_RECIPE(my_recipes || []));
    dispatch(ADD_FILTERED_RECIPE(my_recipes || []));
  }, [recipes]);
  return (
    <>
      {recipeLoading ? (
        <>loading ... </>
      ) : (
        <div className={style.main_container}>
          <SubTitle>My Recipes </SubTitle>
          <div className={style.sort_container}>
            <Search setRecipeName={setRecipeName} />
            <Sort recipes={recipes} />
            <SortingByCatogary
              recipes={recipes}
              likedRecipes={true}
              myRecipes={true}
            />
          </div>
          <div className={style.sort_container}>
            <RecipeCards recipes={filteredRecipes} />
          </div>
        </div>
      )}
    </>
  );
};

export default MyRecipe;
