import globalSettings from './all';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    globalSettings,
});

export default allReducers;