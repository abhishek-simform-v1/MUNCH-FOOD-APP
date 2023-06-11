import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RecipeInterface } from './InitialData';
import RecipeDataService from './../services/recipe.services';

export const CREATE_RECIPE = createAsyncThunk(
  'recipe/CREATE_RECIPE',
  async (newRecipe: RecipeInterface) => {
    try {
      await RecipeDataService.addRecipes(newRecipe);
      alert('New recipe added');
    } catch (error) {
      // Handle error
    }
  }
);

export const getRecipes = createAsyncThunk('recipe/GET_RECIPES', async () => {
  try {
    const data = await RecipeDataService.getAllRecipes();
    const allRecipe = data.docs.map((doc) => ({
      ...doc.data(),
      id: `${doc.id}`,
    }));
    return allRecipe;
  } catch (error) {
    // Handle error
    return [];
  }
});

type initType = {
  recipes: RecipeInterface[];
};

const initialState: initType = {
  recipes: [],
};

export const fetchRecipes = createAsyncThunk(
  'recipe/fetchRecipes',
  async (_, { dispatch }) => {
    try {
      const recipes = await dispatch(getRecipes());
      return recipes.payload;
    } catch (error) {
      // Handle error
      return [];
    }
  }
);

export const RecipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRecipes.fulfilled, (state, action) => {
      state.recipes.push(...action.payload);
    });
  },
});

export default RecipeSlice.reducer;
