import { combineReducers } from 'redux';

import auth from './auth/reducer';
import question from './question/reducer';

export default combineReducers({
  auth,
  question,
});
