import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { authReducer } from './authReducer';

export const Reducers = combineReducers({
  user: userReducer,
  auth: authReducer
})