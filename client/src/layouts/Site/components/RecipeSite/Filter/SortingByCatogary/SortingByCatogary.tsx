import React from 'react';
import { ConfigProvider, Form, Select } from 'antd';
import { useAppDispatch, useAppSelector } from '../../../../../../hooks/hooks';
import {
  ADD_FILTERED_RECIPE,
  selectRecipes,
} from '../../../../../../slices/recipeSlice';
import { RecipeInterface } from '../../../../../../slices/InitialData';
import {
  selectCreatedRecipes,
  selectRatedRecipes,
  selectSavedRecipes,
} from '../../../../../../slices/userSlice';
type props = {
  recipes: RecipeInterface[];
  likedRecipes?: boolean;
  myRecipes?: boolean;
  savedRecipes?: boolean;
};
const SortingByCatogary = ({
  recipes,
  likedRecipes,
  myRecipes,
  savedRecipes,
}: props) => {
  const dispatch = useAppDispatch();
  const rated_recipes = useAppSelector(selectRatedRecipes);
  const my_recipes = useAppSelector(selectCreatedRecipes);
  const saved_recipes = useAppSelector(selectSavedRecipes);

  const Capture = (values: any) => {
    const { sort_catogary } = values;
    let sortedRecipes = recipes;

    switch (sort_catogary) {
      case 'break-fast':
        sortedRecipes = recipes.filter(
          (recipe: RecipeInterface) => recipe.category === 'break-fast'
        );
        break;
      case 'all':
        sortedRecipes = recipes;
        break;
      case 'lunch':
        sortedRecipes = recipes.filter(
          (recipe: RecipeInterface) => recipe.category === 'lunch'
        );
        break;
      case 'snack':
        sortedRecipes = recipes.filter(
          (recipe: RecipeInterface) => recipe.category === 'snack'
        );
        break;
      case 'soup':
        sortedRecipes = recipes.filter(
          (recipe: RecipeInterface) => recipe.category === 'soup'
        );
        break;
      case 'dinner':
        sortedRecipes = recipes.filter((recipe: RecipeInterface) => {
          console.log(recipe.category === 'dinner');
          return recipe.category === 'dinner';
        });

        break;
      default:
        break;
    }

    const user_favorute = rated_recipes.map((rated_recipe) => {
      const [rated] = sortedRecipes.filter((recipe) => {
        return recipe.id === rated_recipe;
      });
      return rated;
    });
    const made_by_user = my_recipes.map((rated_recipe) => {
      const [rated] = sortedRecipes.filter((recipe) => {
        return recipe.id === rated_recipe;
      });
      return rated;
    });
    const saved_by_user = saved_recipes.map((rated_recipe) => {
      const [rated] = sortedRecipes.filter((recipe) => {
        return recipe.id === rated_recipe;
      });
      return rated;
    });
    if (likedRecipes) {
      dispatch(ADD_FILTERED_RECIPE(user_favorute));
    } else if (myRecipes) {
      dispatch(ADD_FILTERED_RECIPE(made_by_user));
    } else if (savedRecipes) {
      dispatch(ADD_FILTERED_RECIPE(saved_by_user));
    } else {
      dispatch(ADD_FILTERED_RECIPE(sortedRecipes));
    }
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: 'hsl(186.38297872340422, 21.86046511627907%, 66%)',
          fontFamily: 'f_regular',
        },
      }}
    >
      <Form size="large" onValuesChange={Capture}>
        <Form.Item name="sort_catogary">
          <Select
            showSearch
            size="large"
            style={{ width: 200 }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? '').includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? '')
                .toLowerCase()
                .localeCompare((optionB?.label ?? '').toLowerCase())
            }
            options={[
              {
                label: 'all',
                value: 'all',
              },
              {
                label: 'break-fast',
                value: 'break-fast',
              },
              {
                label: 'lunch',
                value: 'lunch',
              },
              {
                label: 'snack',
                value: 'snack',
              },
              {
                label: 'soup',
                value: 'soup',
              },
              {
                label: 'dinner',
                value: 'dinner',
              },
            ]}
          />
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
};

export default SortingByCatogary;
