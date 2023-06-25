import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RecipeInterface } from './InitialData';
import RatingDataService from '../services/rating.services';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../database/firebase-config';

export const getRatings = createAsyncThunk('review/GET_RATINGS', async () => {
  try {
    const data = await RatingDataService.getAllRatings();
    const allRatings = data.docs.map((doc) => ({
      ...doc.data(),
      id: `${doc.id}`,
    }));
    return allRatings;
  } catch (error) {
    // Handle error
    return [];
  }
});

const initialState = {
  ratings: <any>[],
  loading: true,
};

export const RatingSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    UPDATE_RATINGS: (state, action) => {
      const updated_rating = action.payload;
      console.log(updated_rating);
      RatingDataService.updateRating(
        updated_rating.id,
        updated_rating.updated_rating
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRatings.fulfilled, (state, action: any) => {
        state.ratings = [...action.payload];
        state.loading = false;
      })
      .addCase(getRatings.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getRatings.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default RatingSlice.reducer;
export const { UPDATE_RATINGS } = RatingSlice.actions;
export const selectRatings = (state: any) => state.rating.ratings;
export const selectRatingLoading = (state: any) => state.rating.loading;
