import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import clock from "./../../../../../assets/icons/clock.svg";
import spoons from "./../../../../../assets/icons/spoons.svg";
import dish_01 from "../../../../../assets/dish.jpg";

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
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/hooks";
import { getRecipes } from "../../../../../slices/Slice";

export default function BigRecipeCard() {
  const recipes = useAppSelector((state) => state.recipe.recipes);
  console.log(recipes);

  recipes.length > 0 ? console.log(recipes[0].category[0]) : 0;
  const navigate = useNavigate();
  return (
    <>
      <MainContainer padding="4em">
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
              delay: 150000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {recipes.map((recipe) => {
              return (
                <SwiperSlide>
                  <div className={style.slide}>
                    <div className={style.slideText}>
                      <div className={style.slideTitle}>
                        <SubTitle>{recipe.recipe_name}</SubTitle>
                        <TagLine align="left">{recipe.recipe_tagline}</TagLine>
                        <div className={style.slideProfile}>
                          <Pill>
                            <img src={clock} />
                            <Span>
                              {" "}
                              {recipe.cooking_time.chill_time +
                                recipe.cooking_time.cook_time +
                                recipe.cooking_time.preperation_time}{" "}
                              minutes
                            </Span>
                          </Pill>
                          <div className={style.category_pills}>
                            {recipe.category.map((i) => {
                              return (
                                <Pill>
                                  <img src={spoons} />
                                  <Span>{i}</Span>
                                </Pill>
                              );
                            })}
                          </div>
                        </div>
                      </div>
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
                      src={recipe.recipe_image.url}
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
