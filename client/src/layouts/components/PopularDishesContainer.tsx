import React from "react";
import { Title } from "../../styleComponents/utils/utils";
import DishCards from "./DishCards";
import { DishCardsContainer, PopularContainer } from "./styles/discardStyle";
import Pagination from "./paginatation/Pagination";

const PopularDishes = () => {
  return (
    <>
      <PopularContainer>
        <Title>Popular Dishes</Title>
        <DishCardsContainer>
          <DishCards />
        </DishCardsContainer>
        <Pagination />
      </PopularContainer>
    </>
  );
};

export default PopularDishes;
