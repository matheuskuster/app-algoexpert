import { combineReducers } from 'redux';

import auth from './auth/reducer';
import question from './question/reducer';
import video from './video/reducer';
import config from './config/reducer';

export default combineReducers({
  auth,
  question,
  video,
  config,
});
