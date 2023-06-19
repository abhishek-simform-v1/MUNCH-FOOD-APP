import Paragraph from '../../../../../utils/Typography/Paragraph';
import SubTitle from '../../../../../utils/Typography/SubTitle';
import Tag from '../../../../../utils/Typography/Tag';
import Title from '../../../../../utils/Typography/Title';
import Button from '../../../../../utils/buttons/Button';
import MainContainer from '../../../../../utils/containers/MainContainer';
import dish from './../../../../../assets/dish.jpg';

import style from './RecipeHero3.module.css';
const RecipeHero3 = () => {
  return (
    <MainContainer>
      <div className={style.container}>
        <div className={style.img_container}>
          <img src={dish} alt="" />
        </div>
        <div className={style.text_container}>
          <SubTitle>All Your Favorites in One Handy App</SubTitle>
          <Paragraph>
            Whether you’re craving a sweet treat or longing for a zesty bite,
            our app satisfies all your taste buds.
          </Paragraph>
        </div>
      </div>
    </MainContainer>
  );
};

export default RecipeHero3;
