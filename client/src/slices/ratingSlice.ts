import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RecipeInterface } from './InitialData';
import RatingDataService from '../services/rating.services';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../database/firebase-config';
import { allRatingType } from '../layouts/Site/components/RecipeSite/IndividualRecipePage/components/components/ReviewForm/RatingComponent';

export const getRatings = createAsyncThunk('rating/GET_RATINGS', async () => {
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
export const setNewRating = createAsyncThunk(
  'rating/SET_RATINGS',
  async (newRating: allRatingType) => {
    try {
      setDoc(doc(db, 'ratings', newRating.id), {
        id: newRating.id,
        allRatings: newRating.allRating,
      });
    } catch (error) {
      console.log(error);
      // Handle error
      return [];
    }
  }
);

const initialState = {
  ratings: <any>[],
  loading: true,
};

export const RatingSlice = createSlice({
  name: 'rating',
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
      })
      .addCase(setNewRating.fulfilled, (state, action: any) => {
        getRatings();
      });
  },
});

export default RatingSlice.reducer;
export const { UPDATE_RATINGS } = RatingSlice.actions;
export const selectRatings = (state: any) => state.rating.ratings;
export const selectRatingLoading = (state: any) => state.rating.loading;
