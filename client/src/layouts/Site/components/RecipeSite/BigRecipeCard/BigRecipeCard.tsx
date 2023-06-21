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

export default function BigRecipeCard() {
  const recipes = useAppSelector(selectRecipes);

  const navigate = useNavigate();
  return (
    <>
      <MainContainer>
        <div className="Title">
          <SubTitle>Recipes</SubTitle>
          <Button border="var(--accent_color)">More Recipes</Button>
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
              delay: 1500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {recipes.map((recipe: RecipeInterface) => {
              return (
                <SwiperSlide>
                  <div className={"slide"}>
                    <div className={style.slideText}>
                      <div className={style.slideTitle}>
                        <SubTitle>{recipe.recipe_name}</SubTitle>
                        <Tag align="left">{recipe.recipe_tagline}</Tag>
                      </div>
                      <NutritionContainer recipe={recipe} />
                      <div className={style.slideProfile}>
                        <Pill>
                          <img src={clock} />
                          <Span> Profile</Span>
                        </Pill>
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
