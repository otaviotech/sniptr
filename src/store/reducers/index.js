import { combineReducers } from 'redux';
import snippet from '../modules/snippet';
import auth from '../modules/auth';

const rootReducer = combineReducers({
  snippet: snippet.reducer,
  auth: auth.reducer,
});

export default rootReducer;
