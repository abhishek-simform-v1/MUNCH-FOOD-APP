export interface RecipeInterface {
  name: string;
  category: string;
  selectedFile: string;
  creator: string;
  time: {
    prep: number;
    chill: number;
    cook: number;
  };
  nutrition: {
    calories: number;
    fiber: number;
    protein: number;
    carbs: number;
    fats: number;
    sugar: number;
  };
  tags: string[];
  likeCount: {
    type: number;
    default: 0;
  };
  createdAt: {
    date: Date;
  };
  instructions: string[];
  ingredients: {
    name: string;
    operation: string;
    qty: number;
    wgt: number;
  }[];
}

export type initType = {
  recipe: RecipeInterface;
  recipes: RecipeInterface[];
};

export const init: initType = {
  recipe: {
    name: '',
    category: '',
    selectedFile: '',
    creator: '',
    time: {
      prep: 0,
      chill: 0,
      cook: 0,
    },
    nutrition: {
      calories: 0,
      fiber: 0,
      protein: 0,
      carbs: 0,
      fats: 0,
      sugar: 0,
    },
    tags: [],
    likeCount: {
      type: 0,
      default: 0,
    },
    createdAt: {
      date: new Date(),
    },
    instructions: [],
    ingredients: [],
  },
  recipes: [
    {
      name: '',
      category: '',
      selectedFile: '',
      creator: '',
      time: {
        prep: 0,
        chill: 0,
        cook: 0,
      },
      nutrition: {
        calories: 0,
        fiber: 0,
        protein: 0,
        carbs: 0,
        fats: 0,
        sugar: 0,
      },
      tags: [],
      likeCount: {
        type: 0,
        default: 0,
      },
      createdAt: {
        date: new Date(),
      },
      instructions: [],
      ingredients: [],
    },
  ],
};
