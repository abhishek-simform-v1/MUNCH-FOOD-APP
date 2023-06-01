import React from "react";
import heroImg from "./../../assets/HeroCheff.png";
import {
  HeroContainer,
  HeroTitle,
  ImgContainer,
  ImgContainerImg,
  HeroTextContainer,
  Tagline,
  HeroButton,
  HeroButtons,
} from "./styles/HeroCtoContainerStyle";
import { Paragraph } from "../../styleComponents/utils/utils";
import Title from "antd/es/skeleton/Title";

const HeroCtoContainer = () => {
  return (
    <HeroContainer>
      <HeroTextContainer>
        <HeroTitle>
          Discover Simple,
          <br />
          Delicious And <br />
          <span>Fast Recipes !</span>
        </HeroTitle>
        <Tagline>
          A recipe is soulless. The essence of the recipe must come from you,
          the cook
        </Tagline>
        <HeroButtons>
          <HeroButton color={"#2F4858"}>Read more</HeroButton>
          <HeroButton>Sign in</HeroButton>
        </HeroButtons>
        <Paragraph>500+ Recipes</Paragraph>
      </HeroTextContainer>
      <ImgContainer>
        <ImgContainerImg src={heroImg} alt="Hero image of chef" />
      </ImgContainer>
    </HeroContainer>
  );
};

export default HeroCtoContainer;
