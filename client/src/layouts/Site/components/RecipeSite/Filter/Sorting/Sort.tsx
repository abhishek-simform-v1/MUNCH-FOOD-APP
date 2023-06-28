import React from "react";
import { ConfigProvider, Form, Select } from "antd";
import { useAppDispatch, useAppSelector } from "../../../../../../hooks/hooks";
import {
  ADD_FILTERED_RECIPE,
  selectRecipes,
} from "../../../../../../slices/recipeSlice";
import { RecipeInterface } from "../../../../../../slices/InitialData";
import { selectReview } from "../../../../../../slices/reviewSlice";
import { selectRatings } from "../../../../../../slices/ratingSlice";
type props = {
  recipes: RecipeInterface[];
};
const Sort = ({ recipes }: props) => {
  const reviews = useAppSelector(selectReview);
  const ratings = useAppSelector(selectRatings);
  const dispatch = useAppDispatch();
  function FindReview(recipe: RecipeInterface) {
    const [recipeReview] = reviews.filter((review) => review.id === recipe.id);

    if (recipeReview == undefined) {
      return 0;
    } else {
      const review = recipeReview.reviews.length;
      return review;
    }
  }
  function FindRating(recipe: RecipeInterface) {
    const [recipeRating] = ratings.filter((rating) => rating.id === recipe.id);
    if (recipeRating == undefined) {
      return 0;
    } else {
      const rating = recipeRating.allRatings.map((ratingRate) => {
        return ratingRate.rating_count;
      });

      const sum = rating.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );

      return sum;
    }
  }
  function lettestArray() {
    const reversedArray = [];
    for (let i = recipes.length - 1; i >= 0; i--) {
      reversedArray.push(recipes[i]);
    }
    return reversedArray;
  }
  const Capture = (values: any) => {
    const { sort_field } = values;

    let sortedRecipes = recipes;
    switch (sort_field) {
      case "all":
        sortedRecipes = recipes;
        break;
      case "1":
        sortedRecipes = recipes.filter((recipe: RecipeInterface) => {
          return FindReview(recipe) >= 1;
        }); // Example criteria
        break;
      case "2":
        sortedRecipes = lettestArray(); // Example criteria
        break;
      case "3":
        sortedRecipes = recipes.filter(
          (recipe: RecipeInterface) =>
            recipe.cooking_time.chill_time +
              recipe.cooking_time.cook_time +
              recipe.cooking_time.preperation_time <=
            10
        ); // Example criteria
        break;
      case "4":
        sortedRecipes = recipes.filter(
          (recipe: RecipeInterface) => FindRating(recipe) >= 2
        ); // Example criteria
        break;
      default:
        break;
    }
    dispatch(ADD_FILTERED_RECIPE(sortedRecipes));
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "hsl(186.38297872340422, 21.86046511627907%, 66%)",
          fontFamily: "f_regular",
        },
      }}
    >
      <Form size="large" onValuesChange={Capture}>
        <Form.Item name="sort_field">
          <Select
            showSearch
            size="large"
            style={{ width: 200 }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
              {
                label: "all",
                value: "all",
              },
              {
                value: "1",
                label: "sort by reviewed",
              },
              {
                value: "2",
                label: "sort by letest",
              },
              {
                value: "3",
                label: "sort by quick and easy",
              },
              {
                value: "4",
                label: "sort by trending",
              },
            ]}
          />
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
};

export default Sort;
