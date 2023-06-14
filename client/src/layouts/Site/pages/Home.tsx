import Header from "../../../shared/navbar/Header";
import Hero from "../components/HomeSite/Hero/Hero";
import Categories from "../components/HomeSite/Categories/Categories";

import BigRecipeCard from "../components/HomeSite/BigRecipeCard/BigRecipeCard";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { useEffect, useState } from "react";
import { getRecipes } from "../../../slices/Slice";

const Home = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getRecipes());
        setIsLoading(false);
      } catch (error) {
        // Handle error
        setIsLoading(false);
      }
    };

    fetchData();
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
