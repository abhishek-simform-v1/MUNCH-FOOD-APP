import { db } from './../database/firebase-config';

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  DocumentReference,
} from 'firebase/firestore';
const recipeCollectionRef = collection(db, 'recipes');
class RecipeDataService {
  addRecipes = (newRecipe: any) => {
    return addDoc(recipeCollectionRef, newRecipe);
  };
  updateRecipes = (id: string, updatedRecipe: any) => {
    const recipeDoc = doc(db, 'recipes', id);
    return updateDoc(recipeDoc, updatedRecipe);
  };
  delete = (id: string) => {
    const recipeDoc = doc(db, 'recipes', id);
    return deleteDoc(recipeDoc);
  };
  getAllRecipes = () => {
    return getDocs(recipeCollectionRef);
  };
  getRecipe = (id: string) => {
    const recipeDoc = doc(db, 'recipes', id);
    return getDoc(recipeDoc);
  };
}
export default new RecipeDataService();
