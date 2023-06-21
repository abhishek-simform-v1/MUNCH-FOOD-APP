import style from "./style.module.css";
import { RecipeInterface } from "../../../../../../../slices/InitialData";

type props = {
  recipe: RecipeInterface;
};
const ImageContainer = ({ recipe }: props) => {
  return (
    <>
      <div className={style.img_container}>
        <img className={style.img} src={recipe.recipe_image} />
      </div>
    </>
  );
};

export default ImageContainer;
