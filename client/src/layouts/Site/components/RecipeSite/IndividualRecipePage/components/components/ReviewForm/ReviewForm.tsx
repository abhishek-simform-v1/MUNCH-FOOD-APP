import { useState, useEffect } from 'react';
import { ConfigProvider, Modal } from 'antd';

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
import {
  UPDATE_USER,
  getUser,
  selectUser,
} from '../../../../../../../../slices/userSlice';
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
import SignupModal from '../../../../../../../../Authentication/SignupModal';
export default function ReviewForm({ recipe }: any) {
  const user = useAppSelector(selectUser);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
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
      const recipeReviews = oldReviews.find(
        (item: RecipeInterface) => item.id === recipe.id
      );
      return recipeReviews ? recipeReviews.reviews : [];
    }
  }
  const [reviews, setReviews] = useState<any>(init() || []);
  function initialState() {
    if (user) {
      return {
        review_id: user.id,
        review_user: user,
        recipe_review: '',
      };
    } else {
      return {};
    }
  }
  const [newReview, setNewReview] = useState(initialState());

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setNewReview({
      ...newReview,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    dispatch(getReviews());
  }, []);

  useEffect(() => {
    const recipeReviews = oldReviews?.find(
      (item: RecipeInterface) => item.id === recipe.id
    );

    setReviews(recipeReviews?.reviews || []);
  }, [oldReviews]);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    if (!user) {
      return setOpen(true);
    } else {
      e.preventDefault();
      const trimmedReview = newReview.recipe_review!.trim();

      // Check if the trimmed review is empty or contains only spaces
      if (trimmedReview === '' || /^\s*$/.test(trimmedReview)) {
        // Display an error message or handle the validation error in your desired way
        alert('Review cannot be empty');
        return;
      }

      const existingReviewIndex = reviews.findIndex(
        (review: { review_user: any }) =>
          review.review_user.id === newReview.review_user.id
      );

      if (existingReviewIndex > -1) {
        // Update the existing review
        const updatedReviews = [...reviews];
        updatedReviews[existingReviewIndex] = newReview;
        setReviews(updatedReviews);
      } else {
        // Add the new review
        setReviews((prev: any) => [...prev, newReview]);
      }

      setNewReview(initialState());
    }
  };

  useEffect(() => {
    if (reviews.length > 0) {
      setDoc(doc(db, 'reviews', recipe.id), {
        reviews,
      });
    } else {
      return;
    }
  }, [reviews]);

  const deleteReview = async (docId: string, reviewId: string) => {
    try {
      const docRef = doc(db, 'reviews', docId);

      // Fetch the document data
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const reviewsData = docSnap.data().reviews;

        // Find the index of the review to delete
        const reviewIndex = reviewsData.findIndex(
          (review: { review_id: string }) => review.review_id === reviewId
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
  const DeleteReview = (recipe: any, review: any) => {
    deleteReview(recipe.id, review.review_id);
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
      <div className={style.review_form_container}>
        <div>
          {reviewLoading ? (
            <h2>loading ....</h2>
          ) : (
            <>
              <div className={style.review_list}>
                {reviews?.map((review: any) => (
                  <div className={style.review_container}>
                    <div className={style.review_content}>
                      <img
                        src={review.review_user.user_image}
                        className={style.reviewer_profile}
                      />

                      <p>{review.recipe_review}</p>
                    </div>
                    <div className={style.review_action}>
                      {user && review.review_id === user.id ? (
                        <button
                          className={style.delete_btn}
                          onClick={() => DeleteReview(recipe, review)}
                        >
                          <img src={deleteIcon} />
                        </button>
                      ) : (
                        <></>
                      )}
                      {user && review.review_id === user.id ? (
                        <button
                          className={style.delete_btn}
                          onClick={() => {
                            setNewReview({
                              ...newReview,
                              recipe_review: review.recipe_review,
                            });
                            // deleteReview(recipe.id, review.review_id);
                          }}
                        >
                          <img src={editIcon} />
                        </button>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        <form onSubmit={handleSubmit}>
          <div className={style.review_form}>
            <label htmlFor="recipe_review">Give Your Feedback</label>
            <textarea
              id="recipe_review"
              name="recipe_review"
              value={newReview.recipe_review}
              onChange={handleChange}
              className={style.review_text_area}
              placeholder="Enter Your Review"
              rows={4}
            />
            {user ? (
              <Button>Add Review</Button>
            ) : (
              <Button onClick={() => setOpen(true)}>Add Review</Button>
            )}
          </div>
        </form>

        <SignupModal open={open} setOpen={setOpen} />
      </div>
    </ConfigProvider>
  );
}
