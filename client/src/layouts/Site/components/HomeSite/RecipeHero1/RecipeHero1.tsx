import Paragraph from '../../../../../utils/Typography/Paragraph';
import SubTitle from '../../../../../utils/Typography/SubTitle';
import Tag from '../../../../../utils/Typography/Tag';
import Title from '../../../../../utils/Typography/Title';
import Button from '../../../../../utils/buttons/Button';
import MainContainer from '../../../../../utils/containers/MainContainer';
import dish from './../../../../../assets/hero2.svg';
import style from './RecipeHero1.module.css';
const RecipeHero1 = () => {
  return (
    <MainContainer>
      <div className={style.container}>
        <div className={style.img_container}>
          <img src={dish} alt="" />
        </div>
        <div className={style.text_container}>
          <SubTitle>Spice up Your Life with Recipe Sharing</SubTitle>
          <Paragraph>
            Discover, share, and treasure mouth-watering recipes through an
            exciting online community. Experience the world’s diverse culinary
            flavor in one spot.
          </Paragraph>
        </div>
      </div>
    </MainContainer>
  );
};

export default RecipeHero1;
