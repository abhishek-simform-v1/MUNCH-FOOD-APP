import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RecipeInterface } from './InitialData';
import ReviewDataService from '../services/review.services ';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../database/firebase-config';

// export const CREATE_RECIPE = createAsyncThunk(
//   'recipe/CREATE_RECIPE',
//   async (newRecipe: RecipeInterface) => {
//     try {
//       await RecipeDataService.addRecipes(newRecipe);
//       alert('New recipe added');
//     } catch (error) {
//       // Handle error
//     }
//   }
// );

// Async thunk action creator

export const getReviews = createAsyncThunk('recipe/GET_REVIEWS', async () => {
  try {
    const data = await ReviewDataService.getAllReview();
    const allReviews = data.docs.map((doc) => ({
      ...doc.data(),
      id: `${doc.id}`,
    }));
    return allReviews;
  } catch (error) {
    // Handle error
    return [];
  }
});

const initialState = {
  reviews: <any>[],
  loading: true,
};

export const ReviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    UPDATE_REVIEW: (state, action) => {
      const updated_review = action.payload;
      ReviewDataService.updateReview(
        updated_review.id,
        updated_review.updated_review
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getReviews.fulfilled, (state, action: any) => {
        state.reviews = [...action.payload];
        state.loading = false;
      })
      .addCase(getReviews.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getReviews.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default ReviewSlice.reducer;
export const { UPDATE_REVIEW } = ReviewSlice.actions;
export const selectReview = (state: any) => state.review.reviews;
export const selectReviewLoading = (state: any) => state.review.loading;
