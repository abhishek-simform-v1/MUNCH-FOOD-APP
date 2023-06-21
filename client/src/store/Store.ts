import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from '../slices/recipeSlice';
import userReducer from '../slices/userSlice';
import apiRecipeReducer from '../slices/apiRecipeSlice';

export const store = configureStore({
  reducer: { recipe: recipeReducer, user: userReducer, apiRecipe: apiRecipeReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = typeof store.getState;
export type AppDispatch = typeof store.dispatch;
