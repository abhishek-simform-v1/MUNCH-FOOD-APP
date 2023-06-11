import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import clock from './../../../../../assets/icons/clock.svg';
import spoons from './../../../../../assets/icons/spoons.svg';
import dish_01 from '../../../../../assets/dish.jpg';
// import dish_02 from "../../../../assets/dish_02.jpg";
// import dish_03 from "../../../../assets/dish_03.jpg";
// import dish_04 from "../../../../assets/dish_04.jpg";
// import dish_05 from "../../../../assets/dish_05.jpg";
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

export default function BigRecipeCard() {
  return (
    <>
      <MainContainer padding="4em">
        <div className="Title">
          <SubTitle>Recipes</SubTitle>
          <Button border="var(--accent_color)">More Recipes</Button>
        </div>
        <Swiper
          slidesPerView={'auto'}
          centeredSlides={true}
          touchStartPreventDefault={false}
          spaceBetween={30}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className={style.slide}>
              <div className={style.slideText}>
                <div className={style.slideTitle}>
                  <SubTitle>Spicy Delicious Chicken Wings</SubTitle>
                  <TagLine align="left">
                    A recipe is soulless. The essence of the recipe must come
                    from you, the cook
                  </TagLine>
                  <div className={style.slideProfile}>
                    <Pill>
                      <img src={clock} />
                      <Span> 30 minutes</Span>
                    </Pill>
                    <Pill>
                      <img src={spoons} />
                      <Span>Lunch</Span>
                    </Pill>
                  </div>
                </div>
                <div className={style.slideProfile}>
                  <Pill>
                    <img src={clock} />
                    <Span> Profile</Span>
                  </Pill>
                  <Button>See Recipe</Button>
                </div>
              </div>

              <img src={dish_01} className={style.dish_image} />
            </div>
          </SwiperSlide>
        </Swiper>
      </MainContainer>
    </>
  );
}
