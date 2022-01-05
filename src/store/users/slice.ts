import { createSlice } from '@reduxjs/toolkit';

import { IUsersStore } from './types';
import { localStorageService } from '../../services';

import { IUsers } from './types';

const slice = createSlice({
  name: 'users',
  initialState: {
    users: localStorageService.getFromLocalStorage<IUsers>('users'),
    chosenUser: null,
  } as IUsersStore,
  reducers: {
    saveUsers: (state, action) => {
      state.users = action.payload;
    },
    saveChosenUser: (state, action) => {
      state.chosenUser = action.payload;
    },
  },
});

export const usersReducer = slice.reducer;

export default { ...slice.actions };
