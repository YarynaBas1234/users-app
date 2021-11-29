import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { authReducer as auth } from './auth';

const reducer = combineReducers({
  auth,
});

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware()],
});

export default store;

export * from './types';
