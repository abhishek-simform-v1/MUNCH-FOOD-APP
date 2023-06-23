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
const reviewCollectionRef = collection(db, 'reviews');
class ReviewDataService {
  addReview = (newReview: any) => {
    return addDoc(reviewCollectionRef, newReview);
  };
  updateReview = (id: string, updatedReview: any) => {
    const reviewDoc = doc(db, 'reviews', id);
    return updateDoc(reviewDoc, updatedReview);
  };
  delete = (id: string) => {
    const reviewDoc = doc(db, 'reviews', id);
    return deleteDoc(reviewDoc);
  };
  getAllReview = () => {
    return getDocs(reviewCollectionRef);
  };
  getReview = (id: string) => {
    const reviewDoc = doc(db, 'reviews', id);
    return getDoc(reviewDoc);
  };
}
export default new ReviewDataService();
