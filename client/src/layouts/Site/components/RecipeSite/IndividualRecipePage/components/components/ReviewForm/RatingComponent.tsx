import React, { useEffect, useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { v4 } from 'uuid';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { db } from '../../../../../../../../database/firebase-config';
import {
  UPDATE_USER,
  selectUser,
} from '../../../../../../../../slices/userSlice';
import {
  UPDATE_RATINGS,
  getRatings,
  selectRatingLoading,
  selectRatings,
} from '../../../../../../../../slices/ratingSlice';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../../../hooks/hooks';

const RatingComponent = ({ recipe }: any) => {
  const ratingLoading = useAppSelector(selectRatingLoading);
  const oldRating = useAppSelector(selectRatings);
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const deleteRating = async (docId, rating_id) => {
    try {
      const docRef = doc(db, 'ratings', docId);

      // Fetch the document data
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const reviewsData = docSnap.data().allRatings;

        // Find the index of the review to delete
        const reviewIndex = reviewsData.findIndex(
          (review) => review.rating_id === rating_id
        );
        if (reviewIndex > -1) {
          // Remove the review from the array
          reviewsData.splice(reviewIndex, 1);

          // Update the document with the modified reviews
          await updateDoc(docRef, { allRatings: reviewsData });
          // setRatings(reviewsData);
          dispatch(getRatings());

          console.log('Rating deleted successfully.');
        } else {
          console.log('Rating not found.');
        }
      } else {
        console.log('Document does not exist.');
      }
    } catch (error) {
      console.error('Error deleting Rating:', error);
    }
  };

  function init() {
    if (ratingLoading) {
      return [];
    } else if (oldRating === undefined) {
      return [];
    } else {
      const recipeRating = oldRating.find((item) => item.id === recipe.id);
      return recipeRating?.allRatings || [];
    }
  }
  const initial_rating = init();

  const [ratings, setRatings] = useState<any>(initial_rating || []);
  const [rating, setRating] = useState(initial_rating.rating_count);
  const handleRating = (rate: number) => {
    const newRating = {
      rating_id: user.id,
      rating_count: rate,
      rating_user: user,
    };

    const existingRating = ratings.find(
      (item: any) => item.rating_id === newRating.rating_id
    );
    console.log('existingRating:', existingRating);
    let r = ratings.pop();
    console.log(r);
    if (existingRating) {
      console.log(ratings);
      deleteRating(recipe.recipe.id, newRating.rating_id);
      setRatings((prev: any) => [...prev, newRating]);
    } else {
      setRatings((prev: any) => [...prev, newRating]);
    }

    setRating(rate);
  };

  const handleReset = () => {
    setRating(0);
  };

  useEffect(() => {
    dispatch(getRatings());
    if (ratings.length > 0) {
      console.log(ratings);
    } else {
      console.log('second');
    }
    if (!ratingLoading) {
      setDoc(doc(db, 'ratings', recipe.id), {
        id: recipe.id,
        allRatings: ratings,
      });
    }

    const isRated = user.rated_recipes.includes(recipe.id);
    if (!isRated) {
      const updatedUser = {
        ...user,
        rated_recipes: [...user.rated_recipes, recipe.id],
      };
      dispatch(UPDATE_USER(updatedUser));
      dispatch(getRatings());
    }
  }, [ratings, recipe.id, user, dispatch]);

  return (
    <div className="App">
      {ratingLoading ? (
        <h2>loading ....</h2>
      ) : (
        <>
          <Rating onClick={handleRating} initialValue={rating} />
          <button onClick={handleReset}>Reset</button>
        </>
      )}
    </div>
  );
};

export default RatingComponent;
