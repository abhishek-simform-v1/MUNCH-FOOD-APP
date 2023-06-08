import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RecipeInterface, init } from './InitialData';

export const RecipeSlice = createSlice({
  name: 'recipe',
  initialState: init,
  reducers: {
    CREATE_RECIPE: (state, action: PayloadAction<string>) => {
      console.log(state.recipe);
      console.log(action.payload);
    },
  },
});

export const { CREATE_RECIPE } = RecipeSlice.actions;

export default RecipeSlice.reducer;
