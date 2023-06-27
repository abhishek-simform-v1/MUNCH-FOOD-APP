import React, { useEffect, useState } from "react";
import { ConfigProvider, Form, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
import {
  ADD_FILTERED_RECIPE,
  selectRecipes,
} from "../../../../../../slices/recipeSlice";
import { current } from "@reduxjs/toolkit";
import { RecipeInterface } from "../../../../../../slices/InitialData";
import { useAppDispatch, useAppSelector } from "../../../../../../hooks/hooks";

const Search: React.FC = () => {
  const [recipeName, setRecipeName] = useState("");
  const dispatch = useAppDispatch();
  const recipes = useAppSelector(selectRecipes);
  const filteredRecipes = recipes.filter((recipe: RecipeInterface) =>
    recipe.recipe_name.toLowerCase().includes(recipeName.toLowerCase())
  );

  const Capture = (values: any) => {
    setRecipeName(values.search_field.toUpperCase());
  };

  useEffect(() => {
    dispatch(ADD_FILTERED_RECIPE(filteredRecipes));
  }, [filteredRecipes]);
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
        <Form.Item name="search_field">
          <Input suffix={<SearchOutlined />} placeholder="Search Recipe" />
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
};

export default Search;
