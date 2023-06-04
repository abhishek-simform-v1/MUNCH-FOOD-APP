import React from 'react';
import Header from '../../shared/navbar/Header';

import Hero from '../page_Components/Home/Hero/Hero';
import RecipeCards from '../page_Components/Home/RecipeCard.tsx/RecipeCards';
import Categories from '../page_Components/Home/Categories/Categories';

const Home = () => {
  return (
    <>
      <>
        {/* <Header /> */}
        <Hero />
        <Categories />
        <RecipeCards />
      </>
    </>
  );
};

export default Home;
