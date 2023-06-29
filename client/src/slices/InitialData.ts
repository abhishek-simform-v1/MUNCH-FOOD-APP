import { Timestamp } from 'firebase/firestore';

export interface RecipeInterface {
  recipe_name: string;
  recipe_image: string;
  id?: string;
  recipe_tagline: string;
  creator: {
    id: string;
    user_email: string;
    user_image: string;
    user_name: string;
  };
  cooking_time: {
    preperation_time: number;
    chill_time: number;
    cook_time: number;
  };
  nutritions: {
    calories: string;
    fiber: string;
    protein: string;
    carbs: string;
    fats: string;
    sugar: string;
  };

  // };
  category: string;

  created_at: string;

  instructions: string[];
  ingredient_info: {
    ingredient_name: string;
    ingredient_operation?: string;
    ingredient_amount: number;
    ingredient_unit: string;
  }[];
}
export interface UserInterface {
  Username: string;
  email: string;
  authToken?: string;
}
