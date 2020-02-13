import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import video from './video/sagas';
import question from './question/sagas';
import config from './config/sagas';

export default function* rootSaga() {
  return yield all([auth, video, question, config]);
}
