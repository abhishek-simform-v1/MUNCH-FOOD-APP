import { useEffect, useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import likeIcon from './../../../../../../../assets/icons/likeIcon.svg';
import style from './style.module.css';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../../hooks/hooks';
import {
  getRatings,
  selectRatingLoading,
  selectRatings,
} from '../../../../../../../slices/ratingSlice';
import { allRatingType, singleRate } from './ReviewForm/RatingComponent';
import Paragraph from '../../../../../../../utils/Typography/Paragraph';

export function RatingContainer({ recipe, className }: any) {
  const dispatch = useAppDispatch();
  const oldRating = useAppSelector(selectRatings);
  const ratingLoading = useAppSelector(selectRatingLoading);
  function init(): number | undefined {
    if (ratingLoading) {
      return undefined;
    } else if (oldRating === undefined) {
      return undefined;
    } else {
      const recipeRating = oldRating.find((item: allRatingType) => {
        return item.id === recipe.id;
      });
      if (recipeRating === undefined) {
        return 0;
      } else {
        const rate = recipeRating?.allRatings.map(
          (rating: singleRate) => rating.rating_count
        );
        if (rate.length == 0) {
          return 0;
        }
        const average = (rate: number[]) =>
          rate.reduce((p, c) => p + c, 0) / rate.length;

        const result = rate ? average(rate) : undefined;

        return result;
      }
    }
  }
  useEffect(() => {
    dispatch(getRatings());
  }, []);
  return (
    <div className={style.rating_component}>
      <Rating
        SVGclassName={`${style.rating_experience_star} ${className}`}
        transition={true}
        allowFraction={true}
        readonly={true}
        initialValue={init()}
      />
    </div>
  );
}
