import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { AsyncThunkAction, Dispatch, AnyAction } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
import { useAppSelector } from '../../../../../../../hooks/hooks';
import {
  getRatings,
  selectRatingLoading,
  selectRatings,
} from '../../../../../../../slices/ratingSlice';

export function RatingContainer({ recipe }: any) {
  const [rating, setRating] = useState(0);
  const oldRatings = useAppSelector(selectRatings);
  const ratingLoading = useAppSelector(selectRatingLoading);
  function init() {
    if (ratingLoading) {
      return [];
    } else if (oldRatings === undefined) {
      return [];
    } else {
      const recipeRatings = oldRatings.find((item) => item.id === recipe.id);
      return recipeRatings ? recipeRatings.ratings : [];
    }
  }
  //   const [ratings, setReviews] = useState<any>(oldRatings[0].reviews);
  //   console.log(ratings);

  return (
    <div className="App">
      <Rating readonly={true} initialValue={4} />
    </div>
  );
}
