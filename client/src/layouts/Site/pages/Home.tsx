import Header from '../../../shared/navbar/Header';
import Hero from '../components/HomeSite/Hero/Hero';

import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { useEffect, useState } from 'react';
import { getRecipes } from '../../../slices/recipeSlice';
import RecipeHero1 from '../components/HomeSite/RecipeHero1/RecipeHero1';

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
      <RecipeHero1 />
    </>
  );
};

export default Home;
