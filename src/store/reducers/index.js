import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { authReducer } from './authReducer';
import { pubReducer } from './pubReducer';

export const Reducers = combineReducers({
  user: userReducer,
  auth: authReducer,
  pub: pubReducer,
})