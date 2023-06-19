import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { UserInterface } from './InitialData';
import UserDataService from '../services/user.services';
import { auth } from '../database/firebase-config';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


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

export const getUser = createAsyncThunk('recipe/GET_USERS', () => {
  try {
    const user = auth.currentUser;
    return user
  } catch (error) {
    // Handle error
    return [];
  }
});

const initialState = {
  current_user: <UserInterface>{},
  auth: false
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    LOG_IN: (state) => {
      state.auth = true
      console.log(state)
    },
    LOG_OUT: (state) => {
      signOut(auth)
        .then(() => {
          state.current_user = {
            Username: "",
            email: ""
          }
          state.auth = false


        })
        .catch((error) => {
          // An error happened.
        });

    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action: any) => {
      state.current_user = action.payload;
      state.auth = true

    });
  },
});

export default UserSlice.reducer;
export const { LOG_IN, LOG_OUT } = UserSlice.actions
export const selectUser = (state: any) => state.user.current_user
