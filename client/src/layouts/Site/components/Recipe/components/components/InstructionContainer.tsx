import Paragraph from "../../../../../../utils/Typography/Paragraph";
import SubTitleH2 from "../../../../../../utils/Typography/SubTitleH2";
import style from "./style.module.css";

const InstructionContainer = () => {
  return (
    <div className={style.instruction_container}>
      <div>
        <SubTitleH2>Instructions</SubTitleH2>
      </div>
      <div className={style.instructions}>
        {[1, 2, 3, 4].map((i, index) => (
          <div className={style.instruction}>
            <div className={style.instruction_num_container}>
              <Paragraph className={style.instruction_num}>
                {index + 1}
              </Paragraph>
            </div>
            <div>
              <Paragraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </Paragraph>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructionContainer;
