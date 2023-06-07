import dish from "./../../../../assets/dish_02.jpg";
import style from "./style.module.css";
const RecipeInfoCard = () => {
  return (
    <div className={style.maincontainer}>
      <div className={style.imgcontainer}>
        <img className={style.img} src={dish} />
      </div>
      <div className={style.ingredients}>
        <div className={style.counter}>Ingredients</div>
        <div>[]</div>
      </div>
    </div>
  );
};

export default RecipeInfoCard;
