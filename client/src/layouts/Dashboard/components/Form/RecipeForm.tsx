import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import Button from '../../../../utils/buttons/Button';
import { CREATE_RECIPE } from '../../../../slices/Slice';

const RecipeForm = () => {
  const recipe = useAppSelector((state) => state.recipe.recipe);
  const recipes = useAppSelector((state) => state.recipe.recipes);
  console.log(recipe);
  console.log(recipes);
  const dispatch = useAppDispatch();
  const [recipestate, setRecipestate] = useState('');
  const submitThis = (e) => {
    e.preventDefault();
    dispatch(CREATE_RECIPE(recipestate));
  };

  return (
    <div>
      <form onSubmit={submitThis}>
        <label htmlFor="recipe">recipe</label>
        <input
          value={recipestate}
          type="text"
          onChange={(e) => setRecipestate(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default RecipeForm;
