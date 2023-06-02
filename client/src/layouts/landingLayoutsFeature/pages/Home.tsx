import React from "react";
import { MainContainer } from "../../../styleComponents/utils/utils";
import HeroCtoContainer from "../../components/HeroCtoContainer";

import BlogModal from "../../components/BlogModal";
import MenuSection from "../../components/MenuSection";
import FoodRecipesCatogary from "../../components/FoodRecipesCatogary";

const Hero = () => {
  return (
    <>
      <MainContainer>
        <HeroCtoContainer />
      </MainContainer>
      <MainContainer>
        <MenuSection />
      </MainContainer>
      <MainContainer>
        <BlogModal />
      </MainContainer>
      <MainContainer>
        <FoodRecipesCatogary />
      </MainContainer>
    </>
  );
};

export default Hero;
