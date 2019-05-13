import { combineReducers, createStore } from 'redux';
import adminReducer from './admin-reducer';

const reducers = combineReducers({
  adminPage: adminReducer,
});

const store = createStore(reducers);

export default store;
