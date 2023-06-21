import { RecipeInterface } from "../../../../../../../slices/InitialData";
import Paragraph from "../../../../../../../utils/Typography/Paragraph";
import SubTitleH2 from "../../../../../../../utils/Typography/SubTitleH2";
import style from "./style.module.css";

type props = {
  recipe: RecipeInterface;
};
const InstructionContainer = ({ recipe }: props) => {
  return (
    <div className={style.instruction_container}>
      <div>
        <SubTitleH2>Instructions</SubTitleH2>
      </div>
      <div className={style.instructions}>
        {recipe.instructions.map((instruction, index) => (
          <div className={style.instruction}>
            <div className={style.instruction_num_container}>
              <Paragraph className={style.instruction_num}>
                {index + 1}
              </Paragraph>
            </div>
            <div>
              <Paragraph>{instruction}</Paragraph>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructionContainer;
