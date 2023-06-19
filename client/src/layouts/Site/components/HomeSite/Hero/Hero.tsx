import { Navigate } from "react-router-dom";
import { auth } from "../../../../../database/firebase-config";
import Paragraph from "../../../../../utils/Typography/Paragraph";
import TagLine from "../../../../../utils/Typography/Tag";
import Title from "../../../../../utils/Typography/Title";
import Button from "../../../../../utils/buttons/Button";
import ButtonOutLine from "../../../../../utils/buttons/ButtonOutLine";
import MainContainer from "../../../../../utils/containers/MainContainer";
import heroImg from "./../../../../../assets/cooking-animate.svg";
import style from "./Hero.module.css";
import { getAuth } from "firebase/auth";
import { useAppDispatch } from "../../../../../hooks/hooks";
import { LOG_OUT } from "../../../../../slices/userSlice";

const Hero = () => {
  const dispatch = useAppDispatch();

  return (
    <MainContainer>
      <div className={style.heroContainer}>
        <div className={style.heroTextContainer}>
          <Title>
            Discover Simple, Delicious And
            <span> Fast Recipes !</span>
          </Title>
          <TagLine align="left">
            A recipe is soulless. The essence of the recipe must come from you,
            the cook
          </TagLine>
          <div className={style.heroBtnContainer}>
            <Button border="var(--accent_color)">Go to Recipes</Button>
            <ButtonOutLine
              border_radius={"20rem"}
              padding="0.4rem 0.6rem"
              border="var(--accent_color)"
            >
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="var(--accent_color)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-arrow-up-right"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </ButtonOutLine>
          </div>
        </div>

        <img className={style.heroImg} src={heroImg} alt="hero" />
      </div>
    </MainContainer>
  );
};

export default Hero;
