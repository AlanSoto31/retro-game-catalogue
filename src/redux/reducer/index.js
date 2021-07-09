import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import gamesReducer from './gamesReducer';

const rootReducer = combineReducers({
  games: gamesReducer,
  platforms: filterReducer,
});

export default rootReducer;
