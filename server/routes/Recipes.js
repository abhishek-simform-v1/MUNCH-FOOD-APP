import express from "express";
import { getRecipes, createRecipe } from "../controllers/Recipes.js";

const router = express.Router();

router.get("/", getRecipes);
router.get("/", createRecipe);
// router.get("/", getRecipes);
// router.get("/", getRecipes);

export default router;
