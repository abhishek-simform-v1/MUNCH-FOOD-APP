import { useAppSelector } from "../../../../../hooks/hooks";
import Span from "../../../../../utils/Typography/Span";
import SubTitle from "../../../../../utils/Typography/SubTitle";
import Tag from "../../../../../utils/Typography/Tag";
import Button from "../../../../../utils/buttons/Button";
import Pill from "../../../../../utils/buttons/Pill";
import NutritionContainer from "../../RecipeSite/components/components/NutritionContainer";
import style from "./RecipeCards.module.css";
import clock from "./../../../../../assets/icons/clock.svg";
import { useNavigate } from "react-router-dom";
import { RecipeInterface } from "../../../../../slices/InitialData";
type props = {
  recipe: RecipeInterface;
};
const RecipeCard = ({ recipe }: props) => {
  const navigate = useNavigate();
  //   const [recipe] = useAppSelector((state) => state.recipe.recipes);
  return (
    <div className={style.recipe_card}>
      <div className={style.slide}>
        <div className={style.slideText}>
          <div className={style.slideTitle}>
            <SubTitle>{recipe.recipe_name}</SubTitle>
            <Tag align="left">{recipe.recipe_tagline}</Tag>
          </div>
          {/* <NutritionContainer recipe={recipe} /> */}
          <div className={style.slideProfile}>
            <Pill>
              <img src={clock} />
              <Span> Profile</Span>
            </Pill>
            <Button
              onClick={() => {
                navigate(`/recipe/${recipe.id}`);
              }}
            >
              See Recipe
            </Button>
          </div>
        </div>

        <div className={style.dish_image_container}>
          <img src={recipe.recipe_image.url} className={style.dish_image} />
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
