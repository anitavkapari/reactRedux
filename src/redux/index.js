// reducers/index.js
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import userReducer from './userReducer';
import apiReducer from './apiReducer';
import itemReducer from './itemReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  userdetails:userReducer,
  api: apiReducer,
  items:itemReducer

});

export default rootReducer;
