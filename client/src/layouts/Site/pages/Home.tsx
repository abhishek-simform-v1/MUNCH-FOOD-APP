import Header from '../../../shared/navbar/Header';
import Hero from '../components/HomeSite/Hero/Hero';
import style from './../style/Home.module.css';
import RecipeHero1 from '../components/HomeSite/RecipeHero1/RecipeHero1';
import RecipeHero2 from '../components/HomeSite/RecipeHero2/RecipeHero2';
import RecipeHero3 from '../components/HomeSite/RecipeHero3/RecipeHero3';
import RecipeHero4 from '../components/HomeSite/RecipeHero4/RecipeHero4';

const Home = () => {
  return (
    <div
      style={{
        marginTop: '120px',
      }}
    >
      <Header />
      <Hero />
      <div className={style.dark_container}>
        <RecipeHero1 />
        <RecipeHero2 />
        <RecipeHero3 />
      </div>
      <RecipeHero4 />
    </div>
  );
};

export default Home;
