import { useAppDispatch, useAppSelector } from "../../../../../hooks/hooks";
import Span from "../../../../../utils/Typography/Span";
import SubTitle from "../../../../../utils/Typography/SubTitle";
import Tag from "../../../../../utils/Typography/Tag";
import Button from "../../../../../utils/buttons/Button";
import Pill from "../../../../../utils/buttons/Pill";
import style from "./RecipeCards.module.css";
import clock from "./../../../../../assets/icons/clock.svg";
import { useNavigate } from "react-router-dom";
import { RecipeInterface } from "../../../../../slices/InitialData";
import Paragraph from "../../../../../utils/Typography/Paragraph";
import { ADD_CURRENT_RECIPE } from "../../../../../slices/recipeSlice";
import commentIcon from "./../../../../../assets/icons/comment.svg";
import likeIcon from "./../../../../../assets/icons/likeIcon.svg";
type props = {
  recipe: RecipeInterface;
};

const RecipeCard = ({ recipe }: props) => {
  const navigate = useNavigate();
  const handleOpenRecipe = () => {
    navigate(`/recipe/${recipe.id}`);
  };
  const dispatch = useAppDispatch();

  return (
    <div className={style.recipe_card}>
      <div className={style.slide}>
        <div className={style.slideText}>
          <div className={style.slideTitle}>
            <SubTitle>{recipe.recipe_name}</SubTitle>
            <Paragraph align="left">{recipe.recipe_tagline}</Paragraph>
          </div>
          {/* <NutritionContainer recipe={recipe} /> */}
          <div className={style.slideProfile}>
            <span>
              <img src={commentIcon} alt="" /> 65+
            </span>
            <span>
              <img src={likeIcon} alt="" /> 65+
            </span>
            <Button onClick={handleOpenRecipe}>See Recipe</Button>
          </div>
        </div>

        <div className={style.dish_image_container}>
          <img src={recipe.recipe_image} className={style.dish_image} />
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
