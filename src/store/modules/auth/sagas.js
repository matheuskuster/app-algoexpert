import { takeLatest, put, all } from 'redux-saga/effects';

import { signInSuccess, signFailure } from './actions';

export function* signIn() {
  try {
    yield put(signInSuccess());
  } catch (err) {
    yield put(signFailure());
  }
}
export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
