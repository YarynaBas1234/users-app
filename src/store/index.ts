import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { authReducer as auth } from './auth';
import { usersReducer as users } from './users';

const reducer = combineReducers({
  auth,
  users,
});

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware()],
});

export default store;

export * from './types';
