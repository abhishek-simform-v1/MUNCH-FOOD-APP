import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import clock from './../../../../../assets/icons/clock.svg';
import spoons from './../../../../../assets/icons/spoons.svg';
import dish_01 from '../../../../../assets/dish.jpg';

import './styles.css';
import style from './Recipe.module.css';
// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper';
import Pill from '../../../../../utils/buttons/Pill';
import Span from '../../../../../utils/Typography/Span';
import MainContainer from '../../../../../utils/containers/MainContainer';
import SubTitle from '../../../../../utils/Typography/SubTitle';
import TagLine from '../../../../../utils/Typography/Tag';
import Button from '../../../../../utils/buttons/Button';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/hooks';
import { getRecipes } from '../../../../../slices/recipeSlice';

import Paragraph from '../../../../../utils/Typography/Paragraph';
import NutritionContainer from '../../RecipeSite/components/components/NutritionContainer';
import SubTitleH2 from '../../../../../utils/Typography/SubTitleH2';
import Title from '../../../../../utils/Typography/Title';
import Tag from '../../../../../utils/Typography/Tag';

export default function BigRecipeCard() {
  const recipes = useAppSelector((state) => state.recipe.recipes);

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
            slidesPerView={'auto'}
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
            {recipes.map((recipe) => {
              return (
                <SwiperSlide>
                  <div className={'slide'}>
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
