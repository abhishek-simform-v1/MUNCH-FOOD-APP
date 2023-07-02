import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RecipeInterface } from './InitialData';
import RecipeDataService from '../services/recipe.services';
import { toast } from 'react-toastify';

export const CREATE_RECIPE = createAsyncThunk(
  'recipe/CREATE_RECIPE',
  async (newRecipe: RecipeInterface) => {
    try {
      await RecipeDataService.addRecipes(newRecipe);
      toast.success('New Recipe Created', {
        position: 'top-right',
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
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
      toast.error('recipe deleted', {
        position: 'top-right',
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
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

const initialState = {
  recipes: <RecipeInterface[]>[],
  filtered_recipe: <RecipeInterface[]>[],
  user_recipes: <RecipeInterface[]>[],
  current_recipe: <RecipeInterface | null>null,
  loading: true,
};

export const RecipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    UPDATE_RECIPE: (state, action) => {
      const updated_recipe = action.payload;
      RecipeDataService.updateRecipes(
        updated_recipe.id,
        updated_recipe.updated_recipe
      );
      state.current_recipe = null;
      toast.success('Recipe Updated Success fully', {
        position: 'top-right',
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    },
    ADD_FILTERED_RECIPE: (state, action) => {
      state.filtered_recipe = action.payload;
    },
    ADD_USER_RECIPE: (state, action) => {
      state.user_recipes = action.payload;
    },
    ADD_CURRENT_RECIPE: (state, action) => {
      state.current_recipe = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRecipes.fulfilled, (state, action: any) => {
        state.recipes = [...action.payload];
        state.loading = false;
      })
      .addCase(getRecipes.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getRecipes.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default RecipeSlice.reducer;
export const {
  ADD_CURRENT_RECIPE,
  UPDATE_RECIPE,
  ADD_FILTERED_RECIPE,
  ADD_USER_RECIPE,
} = RecipeSlice.actions;
export const selectRecipes = (state: any) => state.recipe.recipes;
export const selectFilteredRecipes = (state: any) =>
  state.recipe.filtered_recipe;
export const selectUserRecipes = (state: any) => state.recipe.user_recipes;
export const selectCurrentRecipe = (state: any) => state.recipe.current_recipe;
export const selectLoading = (state: any) => state.recipe.loading;
