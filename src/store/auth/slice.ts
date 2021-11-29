import { createSlice } from "@reduxjs/toolkit";

import { IAuthStore } from "./types";

const slice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
  } as IAuthStore,
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
