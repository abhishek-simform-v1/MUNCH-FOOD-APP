// import React from "react";
import style from "./styles/dishcard.module.css";
import img1 from "./../../assets/dish.jpg";
import img2 from "./../../assets/dish_02.jpg";
import img3 from "./../../assets/dish_03.jpg";
import img4 from "./../../assets/dish_04.jpg";
import img5 from "./../../assets/dish_05.jpg";
import ReactPaginate from "react-paginate";
import Pagination from "./paginatation/Pagination";
import Card from "./Card";

function DishCards() {
  return (
    <>
      {[img1, img2, img3, img4, img5].map((img) => {
        return (
          // <div className={style.card}>
          //   <img src={img} alt="" />
          //   <div className={style.cardContent}>
          //     <h2>Card Heading</h2>
          //     <p>
          //       Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          //       Nesciunt exercitationem iste, voluptatum, quia explicabo
          //       laboriosam rem adipisci voluptates cumque, veritatis atque
          //       nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
          //     </p>
          //     <a href="#" className={style.button}>
          //       Find out more
          //       <span className={style.material_symbol_outlined}>
          //         arrow_right_alt
          //       </span>
          //     </a>
          //   </div>
          // </div>
          <Card img={img} />
        );
      })}
    </>
  );
}

export default DishCards;
