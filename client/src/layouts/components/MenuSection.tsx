import React from "react";
import {
  Paragraph,
  Subtitle,
  Tagline,
} from "../../styleComponents/utils/utils";
import { BlogContainer } from "./styles/BlogModalStyle";
import { ImgContainer, ImgContainerImg } from "./styles/HeroCtoContainerStyle";
import food from "./../../assets/vadapav.png";
import Pill from "../../shared/buttons/Pill";
import Button from "../../shared/buttons/Button";
import {
  MenuContainer,
  MenuImgContainer,
  MenuTextContainer,
} from "./styles/MenuContainerStyle";
const MenuSection = () => {
  return (
    <>
      <Subtitle color="var(--logo-color)">Menu</Subtitle>

      <MenuContainer>
        <MenuImgContainer>
          <ImgContainerImg src={food} />
        </MenuImgContainer>
        <MenuTextContainer>
          <Pill pilleText={"veriety of food"} />

          <Subtitle color="var(--accent_color)" align={"left"}>
            Variety of food and beverage recipes
          </Subtitle>
          <Paragraph color="var(--accent_color)">
            we provide a variety of food and beverage recipes with high famous
            chefs
          </Paragraph>
          <Button
            typeOfBtn={"submit"}
            btnfor="Read Menu"
            color="var(--accent_color)"
            border="var(--accent_color)"
          />
        </MenuTextContainer>
      </MenuContainer>
    </>
  );
};

export default MenuSection;
