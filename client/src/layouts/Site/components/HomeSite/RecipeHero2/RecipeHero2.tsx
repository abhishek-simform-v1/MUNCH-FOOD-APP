import Paragraph from '../../../../../utils/Typography/Paragraph';
import SubTitle from '../../../../../utils/Typography/SubTitle';
import Tag from '../../../../../utils/Typography/Tag';
import Title from '../../../../../utils/Typography/Title';
import Button from '../../../../../utils/buttons/Button';
import MainContainer from '../../../../../utils/containers/MainContainer';
import dish from './../../../../../assets/hero3.svg';

import style from './RecipeHero2.module.css';
const RecipeHero2 = () => {
  return (
    <MainContainer>
      <div className={style.container}>
        <div className={style.img_container}>
          <img src={dish} alt="" />
        </div>
        <div className={style.text_container}>
          <SubTitle>Unlock Thousands of Lip-Smacking Recipes</SubTitle>
          <Paragraph>
            Embark on a thrilling culinary adventure with our app that’s
            brimming with mouthwatering dishes from around the globe.
          </Paragraph>
        </div>
      </div>
    </MainContainer>
  );
};

export default RecipeHero2;
