import mongoose from "mongoose";

const RecipeSchema = mongoose.Schema({
  title: String,
  name: String,
  categories: String,
  selectedFile: String,
  creator: String,
  time: {
    prep: Number,
    chill: Number,
    cook: Number,
  },
  nutrition: {
    calories: Number,
    fiber: Number,
    protein: Number,
    carbs: Number,
    fats: Number,
    sugar: Number,
  },
  tags: [String],
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },

  istructions: [String],
  ingredients: [
    {
      name: String,
      op: String,
      qty: Number,
      wgt: Number,
    },
  ],
});
const RecipeInfo = mongoose.model("RecipeInfo", RecipeSchema);
export default RecipeInfo;
