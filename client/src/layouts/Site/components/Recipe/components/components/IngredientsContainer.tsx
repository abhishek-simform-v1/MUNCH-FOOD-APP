import { useState } from "react";
import SubTitleH2 from "../../../../../../utils/Typography/SubTitleH2";
import ButtonOutLine from "../../../../../../utils/buttons/ButtonOutLine";
import style from "./style.module.css";
import plus from "./../../../../../../assets/icons/plusIcon.svg";
import minus from "./../../../../../../assets/icons/minusIcon.svg";
import Paragraph from "../../../../../../utils/Typography/Paragraph";
import Ingredients from "./../../../../../../assets/icons/ingredients.svg";
import Profile from "./../../../../../../assets/icons/profile.svg";
const IngredientsContainer = () => {
  const [count, setCount] = useState(1);
  const increment_Ingredient = () => {
    setCount((prev) => prev + 1);
  };
  const decrement_Ingredient = () => {
    setCount((prev) => (prev < 2 ? prev : prev - 1));
  };
  return (
    <div className={style.ingredients}>
      <div className={style.ingredients_counter_container}>
        <SubTitleH2>
          <span style={{ fontWeight: 900 }}>5</span> Ingredients{" "}
          <img src={Ingredients} alt="Ingredients" />
        </SubTitleH2>

        <div className={style.ingredients_counter}>
          <ButtonOutLine
            padding="0.5rem 0.8rem"
            onClick={increment_Ingredient}
            border_radius={"50rem"}
          >
            <img src={plus} />
          </ButtonOutLine>
          <Paragraph>
            <img width={"16px"} src={Profile} alt="Ingredients" />
            &nbsp;
            {count}&nbsp;
          </Paragraph>
          <ButtonOutLine
            onClick={decrement_Ingredient}
            padding="0.5rem 0.8rem"
            border_radius={"50rem"}
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
  );
};

export default IngredientsContainer;
