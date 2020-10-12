import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Reducers } from './reducers/index.js';

export const Store = createStore(Reducers, applyMiddleware(thunk));