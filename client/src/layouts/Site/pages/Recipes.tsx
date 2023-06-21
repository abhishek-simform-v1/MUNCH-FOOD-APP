import { useEffect, useState } from 'react';
import MainContainer from '../../../utils/containers/MainContainer';
import { useAppDispatch } from '../../../hooks/hooks';
import { getRecipes } from '../../../slices/recipeSlice';
import axios from 'axios';
import Recipe from './Recipe';
import Header from '../../../shared/navbar/Header';
import RecipeCards from '../components/RecipeSite/SmallRecipeCard/RecipeCards';

const Recipes = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      style={{
        marginTop: '120px',
      }}
    >
      <Header />
      <MainContainer>
        <RecipeCards />
      </MainContainer>
    </div>
  );
};

export default Recipes;
