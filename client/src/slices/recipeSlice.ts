import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RecipeInterface } from './InitialData';
import RecipeDataService from '../services/recipe.services';

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
export const DELETE_RECIPE = createAsyncThunk(
  'recipe/DELETE_RECIPE',
  async (id: string) => {
    try {
      await RecipeDataService.delete(id);
      alert('Recipe Deleted');
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
  loading: boolean
};

const initialState: initType = {
  recipes: [],
  loading: true
};

export const RecipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRecipes.fulfilled, (state, action: any) => {
      state.recipes = [...action.payload];
      state.loading = false

    }).addCase(getRecipes.pending, (state, action) => {
      state.loading = true
    }).addCase(getRecipes.rejected, (state, action) => {
      state.loading = false
    });
  },
});

export default RecipeSlice.reducer;
export const selectRecipes = (state: any) => state.recipe.recipes
export const selectLoading = (state: any) => state.recipe.loading
