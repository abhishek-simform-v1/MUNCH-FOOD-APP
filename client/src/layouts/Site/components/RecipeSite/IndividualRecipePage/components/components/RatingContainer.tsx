import { useState } from "react";
import { Rating } from "react-simple-star-rating";

import style from "./style.module.css";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../../hooks/hooks";
import {
  selectRatingLoading,
  selectRatings,
} from "../../../../../../../slices/ratingSlice";
import { allRatingType, singleRate } from "./ReviewForm/RatingComponent";
import Paragraph from "../../../../../../../utils/Typography/Paragraph";

export function RatingContainer({ recipe }: any) {
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
      const rate = recipeRating?.allRatings.map(
        (rating: singleRate) => rating.rating_count
      );
      const average = (rate: number[]) =>
        rate.reduce((p, c) => p + c, 0) / rate.length;

      const result = rate ? average(rate) : undefined;

      return result;
    }
  }
  function experience(): string {
    const rating = init();

    if (rating === undefined) {
      return "No Rating";
    }

    if (rating < 0 || rating > 5) {
      return "Invalid Rating";
    }

    if (rating <= 2) {
      return "Below Average";
    }

    if (rating > 4) {
      console.log("Excellent Recipe");
    }

    const wholeNumber = Math.floor(rating);
    const fractionalPart = rating - wholeNumber;

    let label = "";

    switch (wholeNumber) {
      case 0:
        label = "Terrible";
        break;
      case 1:
        label = "Bad";
        break;
      case 2:
        label = "Average";
        break;
      case 3:
        label = "Good";
        break;
      case 4:
        label = "Excellent";
        break;
      case 5:
        label = "Exceptional";
        break;
      default:
        label = "";
    }

    if (fractionalPart !== 0) {
      if (fractionalPart <= 0.25) {
        label += " - Poor";
      } else if (fractionalPart <= 0.5) {
        label += " - Fair";
      } else if (fractionalPart <= 0.75) {
        label += " - Good";
      } else {
        label += " - Very Good";
      }
    }

    return label;
  }

  console.log(experience());
  return (
    <div className={style.rating_component}>
      <div className={style.rating_component}>
        <Rating
          SVGclassName="star_rating"
          transition={true}
          allowFraction={true}
          readonly={true}
          initialValue={init()}
        />
      </div>
      <div className={style.rating_experience_txt}>
        <Paragraph>{init()}/5</Paragraph>
        <Paragraph>{experience()}</Paragraph>
      </div>
    </div>
  );
}
