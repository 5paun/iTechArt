import { combineReducers, createStore } from 'redux';
import adminReducer from './reducers/adminReducer';

const reducers = combineReducers({
  adminPage: adminReducer,
});

const store = createStore(reducers);

export default store;
