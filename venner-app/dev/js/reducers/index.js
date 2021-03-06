//the store only takes in one object. We need to combine the reducers before they go to the store in main store.js
import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';

export default combineReducers({
  users: UserReducer,
  activeUser: ActiveUserReducer
});
