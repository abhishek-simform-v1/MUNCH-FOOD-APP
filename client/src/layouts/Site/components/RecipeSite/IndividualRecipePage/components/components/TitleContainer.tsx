import { RecipeInterface } from "../../../../../../../slices/InitialData";
import Paragraph from "../../../../../../../utils/Typography/Paragraph";
import Tag from "../../../../../../../utils/Typography/Tag";
import Title from "../../../../../../../utils/Typography/Title";
import Pill from "../../../../../../../utils/buttons/Pill";
import { RatingContainer } from "./RatingContainer";
import style from "./style.module.css";
type props = {
  recipe: RecipeInterface;
};
const TitleContainer = ({ recipe }: props) => {
  return (
    <div className={style.title_container}>
      <div>
        <Title>{recipe.recipe_name}</Title>
      </div>
      <div>
        <Tag>{recipe.recipe_tagline}</Tag>
      </div>

      <div className={style.pill_container}>
        <Pill>{recipe.category}</Pill>
      </div>
      <RatingContainer recipe={recipe} />
      <div className={style.cook_time_container}>
        <Paragraph>
          Total{" "}
          <span style={{ fontWeight: 900 }}>
            {recipe.cooking_time.chill_time +
              recipe.cooking_time.cook_time +
              recipe.cooking_time.preperation_time}
            m
          </span>
        </Paragraph>
        <Paragraph>
          Prep{" "}
          <span style={{ fontWeight: 900 }}>
            {recipe.cooking_time.preperation_time}m
          </span>
        </Paragraph>
        <Paragraph>
          Chill{" "}
          <span style={{ fontWeight: 900 }}>
            {recipe.cooking_time.chill_time}m
          </span>
        </Paragraph>
        <Paragraph>
          Cook{" "}
          <span style={{ fontWeight: 900 }}>
            {recipe.cooking_time.cook_time}m
          </span>
        </Paragraph>
      </div>
    </div>
  );
};

export default TitleContainer;
