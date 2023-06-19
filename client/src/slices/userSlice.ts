import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { UserInterface } from './InitialData';
import UserDataService from '../services/user.services';

export const CREATE_USER = createAsyncThunk(
  'recipe/CREATE_USER',
  async (newUser: UserInterface) => {
    try {
      console.log(newUser);
      await UserDataService.addUsers(newUser);
    } catch (error) {
      // Handle error
    }
  }
);
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
    console.log(data);
    console.log(allUsers);
    return allUsers;
  } catch (error) {
    // Handle error
    return [];
  }
});

const initialState = {
  users: <UserInterface[]>[],
  current_user: <UserInterface>{},
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action: any) => {
      state.users = [...action.payload];
    });
  },
});

export default UserSlice.reducer;
