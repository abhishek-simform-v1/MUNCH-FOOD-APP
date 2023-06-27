import { useAppDispatch, useAppSelector } from "../../../../../hooks/hooks";

import Button from "../../../../../utils/buttons/Button";
import Pill from "../../../../../utils/buttons/Pill";
import style from "./RecipeCards.module.css";
import clock from "./../../../../../assets/icons/clock.svg";
import { useNavigate } from "react-router-dom";
import { RecipeInterface } from "../../../../../slices/InitialData";
import Paragraph from "../../../../../utils/Typography/Paragraph";
import commentIcon from "./../../../../../assets/icons/comment.svg";
import likeIcon from "./../../../../../assets/icons/likeIcon.svg";
import SubTitleH2 from "./../../../../../utils/Typography/SubTitleH2";
import { RatingContainer } from "../IndividualRecipePage/components/components/RatingContainer";
import {
  selectReview,
  selectReviewLoading,
} from "../../../../../slices/reviewSlice";
import {
  selectRatingLoading,
  selectRatings,
} from "../../../../../slices/ratingSlice";
import { allRatingType } from "../IndividualRecipePage/components/components/ReviewForm/RatingComponent";
type props = {
  recipe: RecipeInterface;
};

const RecipeCard = ({ recipe }: props) => {
  const navigate = useNavigate();
  const oldReview = useAppSelector(selectReview);
  const ratingLoading = useAppSelector(selectRatingLoading);
  const reviewLoading = useAppSelector(selectReviewLoading);
  const oldRating = useAppSelector(selectRatings);
  const handleOpenRecipe = () => {
    navigate(`/recipe/${recipe.id}`);
  };
  function initialRate() {
    if (ratingLoading) {
      return 0;
    } else if (oldRating === undefined || null) {
      return 0;
    } else {
      const [current_recipe_rating] = oldRating.filter(
        (ratings: allRatingType) => ratings.id === recipe.id
      );
      if (current_recipe_rating === undefined) {
        return 0;
      } else {
        let total_rating = current_recipe_rating.allRatings.length;
        return total_rating;
      }
    }
  }
  function initialReview() {
    if (reviewLoading) {
      return 0;
    } else if (oldReview === undefined || null) {
      return 0;
    } else {
      const [current_recipe_review] = oldReview.filter(
        (ratings: allRatingType) => ratings.id === recipe.id
      );
      if (current_recipe_review === undefined) {
        return 0;
      } else {
        let total_review = current_recipe_review.reviews.length;
        return total_review;
      }
    }
  }
  const totalTime = () => {
    return (
      recipe.cooking_time.chill_time +
      recipe.cooking_time.cook_time +
      recipe.cooking_time.preperation_time
    );
  };

  return (
    <div className={style.recipe_card}>
      <div className={style.slide}>
        <div className={style.slideHeader}>
          <div className={style.slideText}>
            <Pill>{recipe.category}</Pill>
            <div className={style.review_rating_container}>
              <div className={style.rating_experience_txt}>
                <img src={clock} alt="clock" />
                <Paragraph>{totalTime()} min</Paragraph>
              </div>
              <div className={style.rating_experience_txt}>
                <img src={likeIcon} alt="likeIcon" />
                <Paragraph>{initialRate()}</Paragraph>
              </div>
              <div className={style.review_txt}>
                <img src={commentIcon} alt="commentIcon" />
                <Paragraph>{initialReview()}</Paragraph>{" "}
              </div>
            </div>
          </div>
          <div className={style.slideTitle}>
            <SubTitleH2>{recipe.recipe_name}</SubTitleH2>
          </div>
          <div className={style.slideProfile}>
            <RatingContainer recipe={recipe} />

            <Button onClick={handleOpenRecipe}>See Recipe</Button>
          </div>
        </div>

        <div className={style.dish_image_container}>
          <img src={recipe.recipe_image} className={style.dish_image} />
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
