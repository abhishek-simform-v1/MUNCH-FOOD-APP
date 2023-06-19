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
const userCollection = collection(db, 'users');
class UserDataService {
  addUsers = (newUser: any) => {
    return addDoc(userCollection, newUser);
  };
  updateUsers = (id: string, updatedUser: any) => {
    const userDoc = doc(db, 'users', id);
    return updateDoc(userDoc, updatedUser);
  };
  delete = (id: string) => {
    const userDoc = doc(db, 'users', id);
    return deleteDoc(userDoc);
  };
  getAllUsers = () => {
    return getDocs(userCollection);
  };
  getUsers = (id: string) => {
    const userDoc = doc(db, 'users', id);
    return getDoc(userDoc);
  };
}
export default new UserDataService();
