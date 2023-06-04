import SubTitle from '../../../../utils/Typography/SubTitle';
import Button from '../../../../utils/buttons/Button';
import FlexContainer from '../../../../utils/containers/FlexContainer';
import MainContainer from '../../../../utils/containers/MainContainer';
import TagLine from '../../../../utils/Typography/Tag';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import clock from './../../../../assets/icons/clock.svg';
import spoons from './../../../../assets/icons/spoons.svg';
import dish_01 from '../../../../assets/dish.jpg';
import dish_02 from '../../../../assets/dish_02.jpg';
import dish_03 from '../../../../assets/dish_03.jpg';
import dish_04 from '../../../../assets/dish_04.jpg';
import dish_05 from '../../../../assets/dish_05.jpg';
import './styles.css';

// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper';
import ImgContainer from '../../../../utils/imgs/ImgContainer';
import Title from '../../../../utils/Typography/Title';
import Pill from '../../../../utils/buttons/Pill';
import Span from '../../../../utils/Typography/Span';
export default function RecipeCards() {
  return (
    <>
      <MainContainer padding="4em">
        <FlexContainer justify_content="space-between">
          <SubTitle>Recipes</SubTitle>
          <Button
            bgColor="var(--accent_color)"
            color="var(--first_color)"
            border="var(--accent_color)"
            hover_bgColor="var(--secondary_color)"
            hover_color="var(--accent_color)"
          >
            More Recipes
          </Button>
        </FlexContainer>
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
            <FlexContainer
              bgColor={'var( --secondary_transparent)'}
              src={dish_01}
              backdrop={'10px'}
              border_radius={'var(--xl_border_radius)'}
              md_f_direction="column"
              align_item="start"
              justify_content="start"
            >
              <FlexContainer
                align_item="start"
                f_direction="column"
                width={'55%'}
                height="400px"
                padding="2rem"
                md_f_direction="column"
                justify_content="space-between"
                md_justify_content="space-between"
              >
                <FlexContainer
                  f_direction="column"
                  justify_content="start"
                  align_item="start"
                  md_f_direction="column"
                  gap="1rem"
                >
                  <SubTitle>Spicy Delicious Chicken Wings</SubTitle>
                  <TagLine align="left">
                    A recipe is soulless. The essence of the recipe must come
                    from you, the cook
                  </TagLine>
                  <FlexContainer
                    justify_content="start"
                    align_item="start"
                    gap="1rem"
                  >
                    <Pill>
                      <img src={clock} />
                      <Span> 30 minutes</Span>
                    </Pill>
                    <Pill>
                      <img src={spoons} />
                      <Span>Lunch</Span>
                    </Pill>
                  </FlexContainer>
                </FlexContainer>
                <FlexContainer
                  height="auto"
                  justify_content="space-between"
                  align_item="center"
                >
                  <Pill>
                    <img src={clock} />
                    <Span> Profile</Span>
                  </Pill>
                  <Button
                    bgColor={'var(--accent_color)'}
                    color={'var(--secondary_color)'}
                    border="var(--accent_color)"
                    hover_bgColor="var(--secondary_color)"
                    hover_color="var(--accent_color)"
                  >
                    See Recipe
                  </Button>
                </FlexContainer>
              </FlexContainer>

              <ImgContainer
                display="none"
                height={'400px'}
                border_radius={'var(--xl_border_radius)'}
                width={'45%'}
                src={dish_01}
              />
            </FlexContainer>
          </SwiperSlide>
          <SwiperSlide>
            <FlexContainer
              bgColor={'var( --secondary_transparent)'}
              src={dish_01}
              backdrop={'10px'}
              border_radius={'var(--xl_border_radius)'}
              md_f_direction="column"
              align_item="start"
              justify_content="start"
            >
              <FlexContainer
                align_item="start"
                f_direction="column"
                width={'55%'}
                height="400px"
                padding="2rem"
                md_f_direction="column"
                justify_content="space-between"
                md_justify_content="space-between"
              >
                <FlexContainer
                  f_direction="column"
                  justify_content="start"
                  align_item="start"
                  md_f_direction="column"
                  gap="1rem"
                >
                  <SubTitle>Spicy Delicious Chicken Wings</SubTitle>
                  <TagLine align="left">
                    A recipe is soulless. The essence of the recipe must come
                    from you, the cook
                  </TagLine>
                  <FlexContainer
                    justify_content="start"
                    align_item="start"
                    gap="1rem"
                  >
                    <Pill>
                      <img src={clock} />
                      <Span> 30 minutes</Span>
                    </Pill>
                    <Pill>
                      <img src={spoons} />
                      <Span>Lunch</Span>
                    </Pill>
                  </FlexContainer>
                </FlexContainer>
                <FlexContainer
                  height="auto"
                  justify_content="space-between"
                  align_item="center"
                >
                  <Pill>
                    <img src={clock} />
                    <Span> Profile</Span>
                  </Pill>
                  <Button
                    bgColor={'var(--accent_color)'}
                    color={'var(--secondary_color)'}
                    border="var(--accent_color)"
                    hover_bgColor="var(--secondary_color)"
                    hover_color="var(--accent_color)"
                  >
                    See Recipe
                  </Button>
                </FlexContainer>
              </FlexContainer>

              <ImgContainer
                display="none"
                border_radius={'var(--xl_border_radius)'}
                height={'400px'}
                width={'45%'}
                src={dish_01}
              />
            </FlexContainer>
          </SwiperSlide>
          <SwiperSlide>
            <FlexContainer
              bgColor={'var( --secondary_transparent)'}
              src={dish_01}
              backdrop={'10px'}
              border_radius={'var(--xl_border_radius)'}
              md_f_direction="column"
              align_item="start"
              justify_content="start"
            >
              <FlexContainer
                align_item="start"
                f_direction="column"
                width={'55%'}
                height="400px"
                padding="2rem"
                md_f_direction="column"
                justify_content="space-between"
                md_justify_content="space-between"
              >
                <FlexContainer
                  f_direction="column"
                  justify_content="start"
                  align_item="start"
                  md_f_direction="column"
                  gap="1rem"
                >
                  <SubTitle>Spicy Delicious Chicken Wings</SubTitle>
                  <TagLine align="left">
                    A recipe is soulless. The essence of the recipe must come
                    from you, the cook
                  </TagLine>
                  <FlexContainer
                    justify_content="start"
                    align_item="start"
                    gap="1rem"
                  >
                    <Pill>
                      <img src={clock} />
                      <Span> 30 minutes</Span>
                    </Pill>
                    <Pill>
                      <img src={spoons} />
                      <Span>Lunch</Span>
                    </Pill>
                  </FlexContainer>
                </FlexContainer>
                <FlexContainer
                  height="auto"
                  justify_content="space-between"
                  align_item="center"
                >
                  <Pill>
                    <img src={clock} />
                    <Span> Profile</Span>
                  </Pill>
                  <Button
                    bgColor={'var(--accent_color)'}
                    color={'var(--secondary_color)'}
                    border="var(--accent_color)"
                    hover_bgColor="var(--secondary_color)"
                    hover_color="var(--accent_color)"
                  >
                    See Recipe
                  </Button>
                </FlexContainer>
              </FlexContainer>

              <ImgContainer
                display="none"
                border_radius={'var(--xl_border_radius)'}
                height={'400px'}
                width={'45%'}
                src={dish_01}
              />
            </FlexContainer>
          </SwiperSlide>
        </Swiper>
      </MainContainer>
    </>
  );
}
