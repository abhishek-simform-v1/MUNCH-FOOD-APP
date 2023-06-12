import style from "./style.module.css";
import dish from "./../../../../../../assets/dish.jpg";
import { RecipeInterface } from "../../../../../../slices/InitialData";
type props = {
  id: string;
  recipes: RecipeInterface[];
};
const ImageContainer = ({ id, recipes }: props) => {
  return (
    <div className={style.img_container}>
      <img className={style.img} src={dish} />
    </div>
  );
};

export default ImageContainer;
