import Header from '../../../shared/navbar/Header';
import Hero from '../components/HomeSite/Hero/Hero';
import style from './Home.module.css';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { useEffect, useState } from 'react';
import { getRecipes } from '../../../slices/recipeSlice';
import RecipeHero1 from '../components/HomeSite/RecipeHero1/RecipeHero1';
import RecipeHero2 from '../components/HomeSite/RecipeHero2/RecipeHero2';
import RecipeHero3 from '../components/HomeSite/RecipeHero3/RecipeHero3';
import RecipeHero4 from '../components/HomeSite/RecipeHero4/RecipeHero4';

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
      <Header />
      <Hero />
      <div className={style.dark_container}>
        <RecipeHero1 />
        <RecipeHero2 />
        <RecipeHero3 />
      </div>
      <RecipeHero4 />
    </>
  );
};

export default Home;
