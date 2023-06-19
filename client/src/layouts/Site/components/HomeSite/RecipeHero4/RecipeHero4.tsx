import Paragraph from '../../../../../utils/Typography/Paragraph';
import SubTitle from '../../../../../utils/Typography/SubTitle';
import Tag from '../../../../../utils/Typography/Tag';
import Title from '../../../../../utils/Typography/Title';
import Button from '../../../../../utils/buttons/Button';
import ButtonOutLine from '../../../../../utils/buttons/ButtonOutLine';
import MainContainer from '../../../../../utils/containers/MainContainer';
import dish from './../../../../../assets/quote.jpg';

import style from './RecipeHero4.module.css';
const RecipeHero4 = () => {
  return (
    <div className={style.container}>
      <div className={style.text_container}>
        <SubTitle>
          {' '}
          “Cooking is as much about creating memories as it is about creating
          meals.”
        </SubTitle>
      </div>
    </div>
  );
};

export default RecipeHero4;
