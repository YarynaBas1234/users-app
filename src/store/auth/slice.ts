import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    loginSuccess: (state) => {
      state.isLoggedIn = true;
    },
    logoutSuccess: (state) => {
      state.isLoggedIn = false;
    }
  }
});

export const authReducer = slice.reducer;

export default { ...slice.actions };
