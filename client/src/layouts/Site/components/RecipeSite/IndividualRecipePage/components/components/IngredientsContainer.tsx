import { useState } from "react";
import SubTitleH2 from "../../../../../../../utils/Typography/SubTitleH2";
import ButtonOutLine from "../../../../../../../utils/buttons/ButtonOutLine";
import style from "./style.module.css";
import plus from "./../../../../../../../assets/icons/plusIcon.svg";
import minus from "./../../../../../../../assets/icons/minusIcon.svg";
import Paragraph from "./../../../../../../../utils/Typography/Paragraph";
import Ingredients from "./../../../../../../../assets/icons/ingredients.svg";
import Profile from "./../../../../../../../assets/icons/signinprofile.svg";
import { RecipeInterface } from "../../../../../../../slices/InitialData";

type props = {
  recipe: RecipeInterface;
};

const IngredientsContainer = ({ recipe }: props) => {
  const [dashedIngredients, setDashedIngredients] = useState<boolean[]>(
    new Array(recipe.ingredient_info.length).fill(true)
  );

  const toggleDashed = (index: number) => {
    setDashedIngredients((prevIngredients) => {
      const updatedIngredients = [...prevIngredients];
      updatedIngredients[index] = !updatedIngredients[index];
      return updatedIngredients;
    });
  };

  return (
    <div className={style.ingredients}>
      <div className={style.ingredients_counter_container}>
        <SubTitleH2>
          <span style={{ fontWeight: 900 }}>
            {recipe.ingredient_info.length}
          </span>{" "}
          Ingredients
        </SubTitleH2>
      </div>
      <div className={style.ingredients_container}>
        {recipe.ingredient_info.map((ingredient, index) => (
          <div
            key={index}
            className={
              dashedIngredients[index]
                ? style.ingredient_container
                : `${style.ingredient_container_dashed} ${style.ingredient_container}`
            }
            onClick={() => {
              toggleDashed(index);
            }}
          >
            <div className={style.ingredient_name_operation}>
              <span>{ingredient.ingredient_name}</span>
              <Paragraph>{ingredient.ingredient_operation}</Paragraph>
            </div>
            <div className={style.ingredient_amount}>
              <Paragraph>{ingredient.ingredient_amount}</Paragraph>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IngredientsContainer;
