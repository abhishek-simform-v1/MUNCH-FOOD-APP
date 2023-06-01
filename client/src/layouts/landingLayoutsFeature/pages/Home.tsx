import React from "react";
import { MainContainer } from "../../../styleComponents/utils/utils";
import HeroCtoContainer from "../../components/HeroCtoContainer";
import PopularDishes from "../../components/PopularDishesContainer";
import BlogModal from "../../components/BlogModal";

const Hero = () => {
  return (
    <>
      <MainContainer>
        <HeroCtoContainer />
      </MainContainer>
      <MainContainer>
        <PopularDishes />
      </MainContainer>
      <MainContainer>
        <BlogModal />
      </MainContainer>
    </>
  );
};

export default Hero;
