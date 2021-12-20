import { createSlice } from "@reduxjs/toolkit";

import { IUsersStore } from "./types";

const slice = createSlice({
  name: 'user',

  initialState: {
    users: null,
  } as IUsersStore,

  reducers: {
    saveUsers: (state, action) => {
      state.users = action.payload;
    }
  }
});

export const usersReducer = slice.reducer;

export default { ...slice.actions };
