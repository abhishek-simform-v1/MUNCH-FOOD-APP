import { useAppDispatch, useAppSelector } from '../../../../../hooks/hooks';
import { getRecipes } from '../../../../../slices/Slice';
import Paragraph from '../../../../../utils/Typography/Paragraph';
import SubTitle from '../../../../../utils/Typography/SubTitle';
import Button from '../../../../../utils/buttons/Button';
import ButtonOutLine from '../../../../../utils/buttons/ButtonOutLine';
import MainContainer from '../../../../../utils/containers/MainContainer';
import dish from './../../../../../assets/dish_02.jpg';
import style from './style.module.css';
import plus from './../../../../../assets/icons/plusIcon.svg';
import minus from './../../../../../assets/icons/minusIcon.svg';
import { useState } from 'react';
import Title from '../../../../../utils/Typography/Title';
import Tag from '../../../../../utils/Typography/Tag';
import Pill from '../../../../../utils/buttons/Pill';
import SubTitleH2 from '../../../../../utils/Typography/SubTitleH2';
const RecipeUiCard = () => {
  const [count, setCount] = useState(1);
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.recipe.recipes);
  console.log(state);
  const increment_Ingredient = () => {
    setCount((prev) => prev + 1);
  };
  const decrement_Ingredient = () => {
    setCount((prev) => (prev < 2 ? prev : prev - 1));
  };
  return (
    <div className={style.main_container}>
      <div className={style.left_side}>
        <div className={style.img_container}>
          <img className={style.img} src={dish} />
        </div>
        <div className={style.ingredients}>
          <div className={style.ingredients_counter_container}>
            <SubTitleH2>
              <span style={{ fontWeight: 900 }}>5</span> Ingredients
            </SubTitleH2>
            <div className={style.ingredients_counter}>
              <ButtonOutLine
                padding="0.5rem 0.8rem"
                onClick={increment_Ingredient}
                border_radius={'50rem'}
              >
                <img src={plus} />
              </ButtonOutLine>
              <Paragraph>{count}</Paragraph>
              <ButtonOutLine
                onClick={decrement_Ingredient}
                padding="0.5rem 0.8rem"
                border_radius={'50rem'}
              >
                <img src={minus} />
              </ButtonOutLine>
            </div>
          </div>
          <div className={style.ingredients_container}>
            {[1, 2, 3, 4].map((i, index) => (
              <div key={index} className={style.ingredient_container}>
                <div className={style.ingredient_name_operation}>
                  <Paragraph>bins</Paragraph>
                  <span>sliced</span>
                </div>
                <div className={style.ingredient_amount}>
                  <Paragraph>{200 * count}g</Paragraph>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={style.right_side}>
        <div className={style.title_container}>
          <div>
            <Title>Chickpea & sweet potato with tahini sauce</Title>
          </div>
          <div className={style.pill_container}>
            <Pill>sdfsf</Pill>
            <Pill>sdfsf</Pill>
            <Pill>sdfsf</Pill>
          </div>
          <div className={style.cook_time_container}>
            <Paragraph>
              Total <span style={{ fontWeight: 900 }}>15m</span>
            </Paragraph>
            <Paragraph>
              Prep <span style={{ fontWeight: 900 }}>15m</span>
            </Paragraph>
            <Paragraph>
              Chill <span style={{ fontWeight: 900 }}>15m</span>
            </Paragraph>
            <Paragraph>
              Cook <span style={{ fontWeight: 900 }}>15m</span>
            </Paragraph>
          </div>
        </div>
        <div className={style.nutrition_container}>
          <div>
            <SubTitleH2>Nutrition per serving</SubTitleH2>
          </div>
          <div className={style.nutrition_card_container}>
            {[1, 2, 3, 4, 5, 6].map((i, index) => (
              <div className={style.nutrition_card}>
                <div className={style.nutrition_amount}>725</div>
                <div className={style.nutrition_type}>Calories</div>
              </div>
            ))}
          </div>
        </div>
        <div className={style.instruction_container}>
          <div>
            <SubTitleH2>Instructions</SubTitleH2>
          </div>
          <div className={style.instructions}>
            {[1, 2, 3, 4].map((i, index) => (
              <div className={style.instruction}>
                <div className={style.instruction_num_container}>
                  <Paragraph className={style.instruction_num}>
                    {index + 1}
                  </Paragraph>
                </div>
                <div>hdfgxhvhcvnbcvbhdfggxcvxcvbnf</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeUiCard;
{
  /* <Button
onClick={() => {
  dispatch(getRecipes());
}}
>
get Recipes
</Button> */
}
