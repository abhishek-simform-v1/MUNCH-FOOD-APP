import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import clock from "./../../../../../assets/icons/clock.svg";

import "./styles.css";
import style from "./Recipe.module.css";
// import required modules
import { Pagination, Autoplay, Navigation } from "swiper";
import Pill from "../../../../../utils/buttons/Pill";
import Span from "../../../../../utils/Typography/Span";
import MainContainer from "../../../../../utils/containers/MainContainer";
import SubTitle from "../../../../../utils/Typography/SubTitle";
import TagLine from "../../../../../utils/Typography/Tag";
import Button from "../../../../../utils/buttons/Button";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../../../hooks/hooks";
import { selectRecipes } from "../../../../../slices/recipeSlice";

import NutritionContainer from "../IndividualRecipePage/components/components/NutritionContainer";
import Tag from "../../../../../utils/Typography/Tag";
import { RecipeInterface } from "../../../../../slices/InitialData";
import likeIcon from "./../../../../../assets/icons/likeIcon.svg";
import commentIcon from "./../../../../../assets/icons/comment.svg";
import { RatingContainer } from "../IndividualRecipePage/components/components/RatingContainer";
import {
  selectReview,
  selectReviewLoading,
} from "../../../../../slices/reviewSlice";
import {
  selectRatingLoading,
  selectRatings,
} from "../../../../../slices/ratingSlice";
import Paragraph from "../../../../../utils/Typography/Paragraph";
import { allRatingType } from "../IndividualRecipePage/components/components/ReviewForm/RatingComponent";
import Title from "../../../../../utils/Typography/Title";

export default function BigRecipeCard() {
  const recipes = useAppSelector(selectRecipes);
  const navigate = useNavigate();
  const oldReview = useAppSelector(selectReview);
  const ratingLoading = useAppSelector(selectRatingLoading);
  const reviewLoading = useAppSelector(selectReviewLoading);
  const oldRating = useAppSelector(selectRatings);

  return (
    <>
      <MainContainer>
        <div className="Title">
          <SubTitle>Recipes</SubTitle>
        </div>
        {recipes.length == 0 ? (
          <></>
        ) : (
          <Swiper
            slidesPerView={"auto"}
            centeredSlides={true}
            touchStartPreventDefault={false}
            spaceBetween={30}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {recipes.map((recipe: RecipeInterface) => {
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
              return (
                <SwiperSlide>
                  <div className={"slide"}>
                    <div className={style.slideText}>
                      <div className={style.slideTitle}>
                        <span>Healthy Food</span>

                        <Title>{recipe.recipe_name}</Title>
                        <Tag align="left">{recipe.recipe_tagline}</Tag>
                      </div>
                      <Pill>{recipe.category}</Pill>
                      <div className={style.review_rating_container}>
                        <div className={style.rating_experience_txt}>
                          <img src={clock} alt="clock" />
                          <Paragraph>
                            {recipe.cooking_time.chill_time +
                              recipe.cooking_time.cook_time +
                              recipe.cooking_time.preperation_time}{" "}
                            min
                          </Paragraph>
                        </div>
                        <div className={style.rating_experience_txt}>
                          <img src={likeIcon} alt="likeIcon" />
                          <Paragraph>{initialRate()}</Paragraph>
                        </div>
                        <div className={style.rating_experience_txt}>
                          <img src={commentIcon} alt="commentIcon" />
                          <Paragraph>{initialReview()}</Paragraph>{" "}
                        </div>
                      </div>
                      <RatingContainer
                        className={style.rating_style}
                        recipe={recipe}
                      />
                      <div className={style.slideProfile_container}>
                        <div className={style.slideProfile}>
                          <img src={recipe.creator.user_image} />
                          <Span> by {recipe.creator.user_name}</Span>
                        </div>

                        <Button
                          onClick={() => {
                            navigate(`/recipe/${recipe.id}`);
                          }}
                        >
                          See Recipe
                        </Button>
                      </div>
                    </div>

                    <img
                      src={recipe.recipe_image}
                      className={style.dish_image}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </MainContainer>
    </>
  );
}
