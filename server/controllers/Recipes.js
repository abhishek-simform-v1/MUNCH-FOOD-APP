import RecipeInfo from "../models/RecipeContent.js";
export const getRecipes = async (req, res) => {
  try {
    const RecipesInfo = await RecipeInfo.find();
    res.status(200).json(RecipesInfo);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createRecipe = async (req, res) => {
  const recipe = req.body;
  const newRecipe = new RecipeInfo(RecipeInfo);
  try {
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {}
  res.status(404).json({ message: error.message });
};
