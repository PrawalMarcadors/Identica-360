import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './Slice/User.slice';

export const reducers = combineReducers({
  UserAuth: userReducer,
});

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
