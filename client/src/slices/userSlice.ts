import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { UserInterface } from './InitialData';
import UserDataService from '../services/user.services';
import { auth } from '../database/firebase-config';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const DELETE_USER = createAsyncThunk(
  'recipe/DELETE_USER',
  async (id: string) => {
    try {
      await UserDataService.delete(id);
      alert('user Deleted');
    } catch (error) {
      // Handle error
    }
  }
);

export const getUsers = createAsyncThunk('recipe/GET_USERS', async () => {
  try {
    const data = await UserDataService.getAllUsers();
    const allUsers = data.docs.map((doc) => ({
      ...doc.data(),
      id: `${doc.id}`,
    }));
    return allUsers;
  } catch (error) {
    // Handle error
    return [];
  }
});
export const getUser = createAsyncThunk('recipe/GET_USER', async () => {
  try {
    const data = await UserDataService.getAllUsers();
    const allUsers = data.docs.map((doc) => ({
      ...doc.data(),
      id: `${doc.id}`,
    }));
    const user = auth.currentUser;
    const current_user = allUsers.filter((users) => users.id === user?.uid);
    return current_user;
  } catch (error) {
    // Handle error
    return [];
  }
});

const initialState = {
  current_user: <UserInterface | null>null,
  rated_recipes: <string[]>[],
  all_users: <any>[],
  created_recipes: <string[]>[],
  saved_recipes: <string[]>[],
  auth: false,
  loading: false,
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    UPDATE_USER: (state, action) => {
      const update_user = action.payload;
      console.log(update_user);
      UserDataService.updateUsers(update_user.id, update_user);
    },
    ADD_RATED_RECIPE: (state, action) => {
      state.rated_recipes = action.payload;
    },
    ADD_CREATED_RECIPE: (state, action) => {
      state.created_recipes = action.payload;
    },
    ADD_SAVED_RECIPE: (state, action) => {
      state.saved_recipes = action.payload;
    },
    LOG_IN: (state) => {
      state.auth = true;
    },
    LOG_OUT: (state) => {
      signOut(auth)
        .then(() =>
          toast.error('Logged Out', {
            position: 'top-right',
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          })
        )
        .catch((error) => {
          // An error happened.
        });

      state.current_user = null;
      state.loading = false;
      state.auth = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, action: any) => {
        const [user] = action.payload;
        state.current_user = user;
        state.auth = true;
        state.loading = false;
      })
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.all_users = action.payload;
      });
  },
});

export default UserSlice.reducer;
export const {
  LOG_IN,
  LOG_OUT,
  UPDATE_USER,
  ADD_RATED_RECIPE,
  ADD_SAVED_RECIPE,
  ADD_CREATED_RECIPE,
} = UserSlice.actions;
export const selectUser = (state: any) => state.user.current_user;
export const selectUsers = (state: any) => state.user.all_users;
export const selectRatedRecipes = (state: any) => state.user.rated_recipes;
export const selectCreatedRecipes = (state: any) => state.user.created_recipes;
export const selectSavedRecipes = (state: any) => state.user.saved_recipes;
export const selectLoadingUser = (state: any) => state.user.loading;
export const selectAuth = (state: any) => state.user.auth;
