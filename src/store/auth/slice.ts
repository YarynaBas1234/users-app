import { createSlice } from '@reduxjs/toolkit';

import { localStorageService } from '../../services';

const slice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: localStorageService.getFromLocalStorage<boolean | null>('isLoggedIn'),
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
    },
    logoutSuccess: (state) => {
      state.isLoggedIn = false;
    }
  }
});

export const authReducer = slice.reducer;

export default { ...slice.actions };
