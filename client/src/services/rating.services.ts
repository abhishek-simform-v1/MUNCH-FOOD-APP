import { db } from '../database/firebase-config';

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
const ratingCollectionRef = collection(db, 'ratings');
class RatingDataService {
  addRating = (newReview: any) => {
    return addDoc(ratingCollectionRef, newReview);
  };
  updateRating = (id: string, updatedReview: any) => {
    console.log(updatedReview, 454);
    console.log(id);
    const ratingDoc = doc(db, 'ratings', id);
    return updateDoc(ratingDoc, updatedReview);
  };
  delete = (id: string) => {
    const ratingDoc = doc(db, 'ratings', id);
    return deleteDoc(ratingDoc);
  };
  getAllRatings = () => {
    return getDocs(ratingCollectionRef);
  };
  getRating = (id: string) => {
    const ratingDoc = doc(db, 'ratings', id);
    return getDoc(ratingDoc);
  };
}
export default new RatingDataService();
