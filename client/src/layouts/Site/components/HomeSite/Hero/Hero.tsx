import { Navigate, useNavigate } from 'react-router-dom';
import { auth } from '../../../../../database/firebase-config';
import Paragraph from '../../../../../utils/Typography/Paragraph';
import TagLine from '../../../../../utils/Typography/Tag';
import Title from '../../../../../utils/Typography/Title';
import Button from '../../../../../utils/buttons/Button';
import ButtonOutLine from '../../../../../utils/buttons/ButtonOutLine';
import MainContainer from '../../../../../utils/containers/MainContainer';
import heroImg from './../../../../../assets/hero1.svg';
import style from './Hero.module.css';
import { getAuth } from 'firebase/auth';
import { useAppDispatch } from '../../../../../hooks/hooks';
import { LOG_OUT } from '../../../../../slices/userSlice';

const Hero = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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
            <Button
              onClick={() => {
                navigate('recipes', { replace: true });
              }}
              border="var(--accent_color)"
            >
              Go to Recipes
            </Button>
            <ButtonOutLine
              onClick={() => {
                navigate('createrecipe', { replace: true });
              }}
              border="var(--accent_color)"
            >
              make Recipes!!!
            </ButtonOutLine>
          </div>
        </div>

        <img className={style.heroImg} src={heroImg} alt="hero" />
      </div>
    </MainContainer>
  );
};

export default Hero;
