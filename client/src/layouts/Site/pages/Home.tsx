import React from "react";
import Header from "../../../shared/navbar/Header";
import Hero from "../components/Home/Hero/Hero";
import Categories from "../components/Home/Categories/Categories";

import BigRecipeCard from "../components/Home/BigRecipeCard/BigRecipeCard";

const Home = () => {
  return (
    <>
      <>
        {/* <Header /> */}
        <Hero />
        <Categories />
        <BigRecipeCard />
      </>
    </>
  );
};

export default Home;
