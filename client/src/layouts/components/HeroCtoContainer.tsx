import React from "react";
import heroImg from "./../../assets/fulldish.png";
import {
  HeroContainer,
  HeroTitle,
  ImgContainer,
  ImgContainerImg,
  HeroTextContainer,
  HeroButtons,
} from "./styles/HeroCtoContainerStyle";
import { Paragraph, Tagline } from "../../styleComponents/utils/utils";
import Title from "antd/es/skeleton/Title";
import Button from "../../shared/buttons/Button";

const HeroCtoContainer = () => {
  return (
    <HeroContainer>
      <HeroTextContainer>
        <HeroTitle>
          Discover Simple, Delicious And
          <span> Fast Recipes !</span>
        </HeroTitle>
        <Tagline>
          A recipe is soulless. The essence of the recipe must come from you,
          the cook
        </Tagline>
        <HeroButtons>
          <Button
            bgColor={"#2F4858"}
            color={"#FFFAF4"}
            border={"2f44858"}
            typeOfBtn={"submit"}
            btnfor={"Read more"}
          ></Button>
          <Button
            padding={"0.5rem 0.5rem"}
            color={"var(--accent-color)"}
            border={"#2F4858"}
            btnfor={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-arrow-up-right"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            }
          />
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
