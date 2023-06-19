import Paragraph from '../../../../../utils/Typography/Paragraph';
import SubTitle from '../../../../../utils/Typography/SubTitle';
import Tag from '../../../../../utils/Typography/Tag';
import Title from '../../../../../utils/Typography/Title';
import Button from '../../../../../utils/buttons/Button';
import MainContainer from '../../../../../utils/containers/MainContainer';
import cook from './../../../../../assets/fulldish.png';
import style from './RecipeHero1.module.css';
const RecipeHero1 = () => {
  return (
    <MainContainer>
      <div className={style.container}>
        <div className={style.img_container}>
          <img src={cook} alt="" />
        </div>
        <div className={style.text_container}>
          <SubTitle>Spice up Your Life with Recipe Sharing</SubTitle>
          <Tag>
            Discover, share, and treasure mouth-watering recipes through an
            exciting online community. Experience the world’s diverse culinary
            flavor in one spot.
          </Tag>
          <Button>Explore</Button>
        </div>
      </div>
    </MainContainer>
  );
};

export default RecipeHero1;
