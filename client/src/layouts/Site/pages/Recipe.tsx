import { useEffect } from 'react';
import MainContainer from '../../../utils/containers/MainContainer';
import RecipeUiCard from '../components/RecipeSite/IndividualRecipePage/components/RecipeUiCard';
import { getRecipes } from '../../../slices/recipeSlice';
import { useAppDispatch } from '../../../hooks/hooks';

const Recipe = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, []);
  return (
    <div
      style={{
        marginTop: '120px',
      }}
    >
      {/* <Header /> */}
      <MainContainer>
        <RecipeUiCard />
      </MainContainer>
    </div>
  );
};

export default Recipe;
