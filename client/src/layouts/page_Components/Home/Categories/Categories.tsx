import Paragraph from "../../../../utils/Typography/Paragraph";
import MainContainer from "../../../../utils/containers/MainContainer";

import breakfast from "./../../../../assets/catagories_asset/breakfast.png";
import lunch from "./../../../../assets/catagories_asset/lunch.png";
import soup from "./../../../../assets/catagories_asset/hotsoup.png";
import snack from "./../../../../assets/catagories_asset/snack.png";
import dinner from "./../../../../assets/catagories_asset/dinner.png";
import sweets from "./../../../../assets/catagories_asset/sweets.png";
import Subtitle from "../../../../utils/Typography/SubTitle";
import Button from "../../../../utils/buttons/Button";
import style from "./Cat.module.css";
const Categories = () => {
  return (
    <MainContainer padding="4em">
      <div className={"Title"}>
        <Subtitle>Categories</Subtitle>
        <Button border="var(--accent_color)">More Categories</Button>
      </div>
      <div className={style.cat}>
        <div className={style.catItems}>
          <div className={style.catItem}>
            <img src={breakfast} width="60px" />
            <Paragraph>break fast</Paragraph>
          </div>
          <div className={style.catItem}>
            <img src={lunch} width="60px" />
            <Paragraph>Lunch</Paragraph>
          </div>
        </div>
        <div className={style.catItems}>
          <div className={style.catItem}>
            <img src={soup} width="60px" />
            <Paragraph>Soups</Paragraph>
          </div>
          <div className={style.catItem}>
            <img src={snack} width="60px" />
            <Paragraph>Snacks</Paragraph>
          </div>
        </div>
        <div className={style.catItems}>
          <div className={style.catItem}>
            <img src={dinner} width="60px" />
            <Paragraph>Dinner</Paragraph>
          </div>
          <div className={style.catItem}>
            <img src={sweets} width="60px" />
            <Paragraph>Desserts</Paragraph>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Categories;
