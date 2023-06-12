import Header from "../../../shared/navbar/Header";
import Hero from "../components/Home/Hero/Hero";
import Categories from "../components/Home/Categories/Categories";

import BigRecipeCard from "../components/Home/BigRecipeCard/BigRecipeCard";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { useEffect } from "react";
import { getRecipes } from "../../../slices/Slice";

const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getRecipes());
  }, []);

  return (
    <>
      {/* <Header /> */}
      <Hero />
      <Categories />

      <BigRecipeCard />
    </>
  );
};

export default Home;
