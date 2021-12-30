import { createSlice } from '@reduxjs/toolkit';

import { localStorageService } from '../../services';

import { IUsers } from './types';

const slice = createSlice({
  name: 'users',
  initialState: {
    users: localStorageService.getFromLocalStorage<IUsers>('users'),
  },
  reducers: {
    saveUsers: (state, action) => {
      state.users = action.payload;
      localStorageService.addToLocalStorage('users', action.payload);
    },
  },
});

export const usersReducer = slice.reducer;

export default { ...slice.actions };
