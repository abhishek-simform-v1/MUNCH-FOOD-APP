import Header from '../../../shared/navbar/Header';
import Hero from '../components/HomeSite/Hero/Hero';
import style from './../style/Home.module.css';
import RecipeHero1 from '../components/HomeSite/RecipeHero1/RecipeHero1';
import RecipeHero2 from '../components/HomeSite/RecipeHero2/RecipeHero2';
import RecipeHero4 from '../components/HomeSite/RecipeHero4/RecipeHero4';

import BigRecipeCard from '../components/RecipeSite/BigRecipeCard/BigRecipeCard';
import MainContainer from '../../../utils/containers/MainContainer';

const Home = () => {
  return (
    <div
      style={{
        marginTop: '120px',
      }}
    >
      <Header />
      <MainContainer>
        <Hero />
        <BigRecipeCard />
        <div className={style.dark_container}>
          <RecipeHero1 />
          <RecipeHero2 />
        </div>
        <RecipeHero4 />
      </MainContainer>
    </div>
  );
};

export default Home;
