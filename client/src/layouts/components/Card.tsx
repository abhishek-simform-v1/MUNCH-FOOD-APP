import React, { memo } from "react";
import style from "./styles/dishcard.module.css";
type Props = {
  img: string;
};
const Card = (props: Props) => {
  const img = props.img;
  return (
    <div className={style.card}>
      <img src={img} alt="" />
      <div className={style.cardContent}>
        <h2>Card Heading</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          exercitationem iste, voluptatum, quia explicabo laboriosam rem
          adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa
          asperiores harum? Dicta odio aut hic.
        </p>
        <a href="#" className={style.button}>
          Find out more
          <span className={style.material_symbol_outlined}>
            arrow_right_alt
          </span>
        </a>
      </div>
    </div>
  );
};

export default memo(Card);
