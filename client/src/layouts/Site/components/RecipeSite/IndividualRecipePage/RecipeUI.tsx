import React, { useEffect } from 'react';
import style from './Recipe.module.css';
import RecipeUiCard from './components/RecipeUiCard';
import { useAppDispatch } from '../../../../../hooks/hooks';
import { getRecipes } from '../../../../../slices/recipeSlice';

const RecipeUI = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getRecipes());
  }, []);
  return (
    <div className={style.mainContainer}>
      <RecipeUiCard />
    </div>
  );
};

export default RecipeUI;
