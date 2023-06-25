import { useState, useEffect } from 'react';
import { ConfigProvider } from 'antd';

import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { Form } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { MinusCircleOutlined } from '@ant-design/icons';

import ButtonOutLine from '../../../../../../../../utils/buttons/ButtonOutLine';
import style from './ReviewFormStyle.module.css';
import TextArea from 'antd/es/input/TextArea';
import FormItem from 'antd/es/form/FormItem';
import Button from '../../../../../../../../utils/buttons/Button';
import like from './../../../../../../../../assets/icons/likeIcon.svg';
import dislike from './../../../../../../../../assets/icons/dislikeIcon.svg';

import { RecipeInterface } from '../../../../../../../../slices/InitialData';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../../../hooks/hooks';
import { selectUser } from '../../../../../../../../slices/userSlice';
import { UPDATE_RECIPE } from '../../../../../../../../slices/recipeSlice';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../../../../../../database/firebase-config';
import {
  getReviews,
  selectReview,
  selectReviewLoading,
} from '../../../../../../../../slices/reviewSlice';
import deleteIcon from './../../../../../../../../assets/icons/deleteIcon.svg';
import editIcon from './../../../../../../../../assets/icons/editIcon.svg';
export default function ReviewForm({ recipe }: any) {
  const user = useAppSelector(selectUser);

  const dispatch = useAppDispatch();
  const oldReviews = useAppSelector(selectReview);
  const reviewLoading = useAppSelector(selectReviewLoading);
  function init() {
    if (reviewLoading) {
      return [];
    } else if (oldReviews === undefined) {
      // setReviews([]);
      return [];
    } else {
      const recipeReviews = oldReviews.find((item) => item.id === recipe.id);
      return recipeReviews ? recipeReviews.reviews : [];
    }
  }
  const [reviews, setReviews] = useState<any>(init() || []);
  function initialState() {
    return {
      review_id: v4(),
      review_user: user,
      recipe_review: '',
    };
  }
  const [newReview, setNewReview] = useState(initialState());

  const handleChange = (e) => {
    setNewReview({
      ...newReview,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedReview = newReview.recipe_review.trim();

    // Check if the trimmed review is empty or contains only spaces
    if (trimmedReview === '' || /^\s*$/.test(trimmedReview)) {
      // Display an error message or handle the validation error in your desired way
      alert('Review cannot be empty');
      return;
    }
    setReviews((prev: any) => [...prev, newReview]);
    setNewReview(initialState());
    // Handle form submission
  };

  useEffect(() => {
    dispatch(getReviews());
    setDoc(doc(db, 'reviews', recipe.id), {
      reviews,
    });
  }, [reviews]);
  const deleteReview = async (docId, reviewId) => {
    try {
      const docRef = doc(db, 'reviews', docId);

      // Fetch the document data
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const reviewsData = docSnap.data().reviews;

        // Find the index of the review to delete
        const reviewIndex = reviewsData.findIndex(
          (review) => review.review_id === reviewId
        );

        if (reviewIndex > -1) {
          // Remove the review from the array
          reviewsData.splice(reviewIndex, 1);

          // Update the document with the modified reviews
          await updateDoc(docRef, { reviews: reviewsData });
          setReviews(reviewsData);
          dispatch(getReviews());

          console.log('Review deleted successfully.');
        } else {
          console.log('Review not found.');
        }
      } else {
        console.log('Document does not exist.');
      }
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: 'hsl(186.38297872340422, 21.86046511627907%, 66%)',
          fontFamily: 'f_regular',
        },
      }}
    >
      <div>
        <div>
          {reviewLoading ? (
            <h2>loading ....</h2>
          ) : (
            <>
              <div className={style.review_list}>
                {reviews?.map((review) => (
                  <div className={style.review_container}>
                    <div className={style.review_content}>
                      <img
                        src={review.review_user.user_image}
                        className={style.reviewer_profile}
                      />
                      <p>{review.recipe_review}</p>
                    </div>
                    <button
                      className={style.delete_btn}
                      onClick={() =>
                        deleteReview(recipe.recipe.id, review.review_id)
                      }
                    >
                      <img src={deleteIcon} />
                    </button>
                    <button
                      className={style.delete_btn}
                      onClick={() => {
                        setNewReview({
                          ...newReview,
                          recipe_review: review.recipe_review,
                        });
                        deleteReview(recipe.recipe.id, review.review_id);
                      }}
                    >
                      <img src={editIcon} />
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="recipe_review">Reviews:</label>
            <textarea
              id="recipe_review"
              name="recipe_review"
              value={newReview.recipe_review}
              onChange={handleChange}
              className={style.review_text_area}
              placeholder="Enter Your Review"
              rows={4}
            />
          </div>
          <button type="submit">Add Review</button>
        </form>
      </div>
    </ConfigProvider>
  );
}
