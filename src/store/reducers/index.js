import { combineReducers } from 'redux';
import snippet from '../modules/snippet';

const rootReducer = combineReducers({
  snippet: snippet.reducer,
});

export default rootReducer;
