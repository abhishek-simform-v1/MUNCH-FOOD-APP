import Paragraph from "../../../../../../utils/Typography/Paragraph";
import SubTitleH2 from "../../../../../../utils/Typography/SubTitleH2";
import Title from "../../../../../../utils/Typography/Title";
import Pill from "../../../../../../utils/buttons/Pill";
import style from "./style.module.css";

const NutritionContainer = () => {
  return (
    <div className={style.nutrition_container}>
      <div>
        <SubTitleH2>Nutrition per serving</SubTitleH2>
      </div>

      <div className={style.nutrition_card_container}>
        <div className={style.nutrition_card_container_instance}>
          <div className={style.nutrition_card}>
            <div className={style.nutrition_amount}>725</div>
            <div className={style.nutrition_type}>Calories</div>
          </div>
          <div className={style.nutrition_card}>
            <div className={style.nutrition_amount}>725</div>
            <div className={style.nutrition_type}>Calories</div>
          </div>
        </div>
        <div className={style.nutrition_card_container_instance}>
          <div className={style.nutrition_card}>
            <div className={style.nutrition_amount}>725</div>
            <div className={style.nutrition_type}>Calories</div>
          </div>
          <div className={style.nutrition_card}>
            <div className={style.nutrition_amount}>725</div>
            <div className={style.nutrition_type}>Calories</div>
          </div>
        </div>
        <div className={style.nutrition_card_container_instance}>
          <div className={style.nutrition_card}>
            <div className={style.nutrition_amount}>725</div>
            <div className={style.nutrition_type}>Calories</div>
          </div>
          <div className={style.nutrition_card}>
            <div className={style.nutrition_amount}>725</div>
            <div className={style.nutrition_type}>Calories</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionContainer;
