import changeName from './changeName';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  changeName,
});

export default allReducers;