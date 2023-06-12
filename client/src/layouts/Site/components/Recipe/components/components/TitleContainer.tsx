import Paragraph from "../../../../../../utils/Typography/Paragraph";
import Title from "../../../../../../utils/Typography/Title";
import Pill from "../../../../../../utils/buttons/Pill";
import style from "./style.module.css";

const TitleContainer = () => {
  return (
    <div className={style.title_container}>
      <div>
        <Title>Chickpea & sweet potato with tahini sauce</Title>
      </div>
      <div className={style.pill_container}>
        <Pill>sdfsf</Pill>
        <Pill>sdfsf</Pill>
        <Pill>sdfsf</Pill>
      </div>
      <div className={style.cook_time_container}>
        <Paragraph>
          Total <span style={{ fontWeight: 900 }}>15m</span>
        </Paragraph>
        <Paragraph>
          Prep <span style={{ fontWeight: 900 }}>15m</span>
        </Paragraph>
        <Paragraph>
          Chill <span style={{ fontWeight: 900 }}>15m</span>
        </Paragraph>
        <Paragraph>
          Cook <span style={{ fontWeight: 900 }}>15m</span>
        </Paragraph>
      </div>
    </div>
  );
};

export default TitleContainer;
