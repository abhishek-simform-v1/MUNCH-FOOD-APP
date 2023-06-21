import { RecipeInterface } from "../../../../../../../slices/InitialData";
// import Paragraph from "../../../../../../utils/Typography/Paragraph";
import SubTitleH2 from "../../../../../../../utils/Typography/SubTitleH2";
// import Title from "../../../../../../utils/Typography/Title";
// import Pill from "../../../../../../utils/buttons/Pill";
import style from "./style.module.css";

type props = {
  recipe: RecipeInterface;
};
const NutritionContainer = ({ recipe }: props) => {
  return (
    <div className={style.nutrition_container}>
      <div>
        <SubTitleH2>Nutrition per serving</SubTitleH2>
      </div>

      <div className={style.nutrition_card_container}>
        <div className={style.nutrition_card_container_instance}>
          <div className={style.nutrition_card}>
            <div className={style.nutrition_amount}>
              {recipe.nutritions.calories}
            </div>
            <div className={style.nutrition_type}>Calories</div>
          </div>
          <div className={style.nutrition_card}>
            <div className={style.nutrition_amount}>
              {recipe.nutritions.carbs}
            </div>
            <div className={style.nutrition_type}>Carbs</div>
          </div>
        </div>
        <div className={style.nutrition_card_container_instance}>
          <div className={style.nutrition_card}>
            <div className={style.nutrition_amount}>
              {recipe.nutritions.fats}
            </div>
            <div className={style.nutrition_type}>Fats</div>
          </div>
          <div className={style.nutrition_card}>
            <div className={style.nutrition_amount}>
              {recipe.nutritions.fiber}
            </div>
            <div className={style.nutrition_type}>Fiber</div>
          </div>
        </div>
        <div className={style.nutrition_card_container_instance}>
          <div className={style.nutrition_card}>
            <div className={style.nutrition_amount}>
              {recipe.nutritions.protein}
            </div>
            <div className={style.nutrition_type}>Protein</div>
          </div>
          <div className={style.nutrition_card}>
            <div className={style.nutrition_amount}>
              {recipe.nutritions.sugar}
            </div>
            <div className={style.nutrition_type}>Sugar</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionContainer;
