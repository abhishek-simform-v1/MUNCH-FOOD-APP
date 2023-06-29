import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import data from '../database/db';

export const searchApiRecipe = createAsyncThunk(
  'api_recipe/searchRecipes',
  async () => {
    // const myHeaders = new Headers();
    // myHeaders.append("apikey", "D12ZmowWRZ8hn92Sxoaw3kRuYFAB19Jl");

    // const requestOptions = {
    //   method: 'GET',
    //   headers: myHeaders
    // };

    // const url = `https://api.apilayer.com/spoonacular/recipes/complexSearch?query=${query}`;
    // const response = await fetch(url, requestOptions);
    // const result = await response.text();
    console.log(data);
    return data;
  }
);
export const fetchRecipeInformation = createAsyncThunk(
  'api_recipe/fetchInformation',
  async (recipeId) => {
    const myHeaders = new Headers();
    myHeaders.append('apikey', '85'); //D12ZmowWRZ8hn92Sxoaw3kRuYFAB19Jl

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };
    const url = `https://api.apilayer.com/spoonacular/recipes/${recipeId}/information?includeNutrition=true`;

    const response = await fetch(url, requestOptions);
    const result = await response.text();

    return result;
  }
);

type initType = {
  apiRecipes: any;
  apiRecipe: any;
  loading: boolean;
};

const initialState: initType = {
  apiRecipes: [],
  apiRecipe: {},
  loading: true,
};

export const ApiRecipeSlice = createSlice({
  name: 'api_recipe',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchApiRecipe.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchApiRecipe.fulfilled, (state, action) => {
        // const data = JSON.parse(action.payload);

        state.loading = false;
        state.apiRecipes = action.payload;
      })
      .addCase(searchApiRecipe.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(fetchRecipeInformation.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRecipeInformation.fulfilled, (state, action) => {
        state.loading = false;
        state.apiRecipe = action.payload;
      })
      .addCase(fetchRecipeInformation.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default ApiRecipeSlice.reducer;
export const selectApiRecipes = (state: any) => state.apiRecipe.apiRecipes;
export const selectApiRecipe = (state: any) => state.apiRecipe.apiRecipe;
export const selectApiLoading = (state: any) => state.apiRecipe.loading;
