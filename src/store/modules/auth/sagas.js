import { takeLatest, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn() {
  try {
    yield put(signInSuccess());
  } catch (err) {
    yield put(signFailure());
  }
}

export function setToken() {
  api.defaults.headers.Authorization =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNZXRhZGF0YSI6eyJyb2xlcyI6InVzZXIifSwiZXhwIjoyNTkyMDAxNTc4NDIxOTk1LCJqdGkiOiI2YWRjNTA1OS00NDlmLTQ5YmYtYjkwYy0yZTVjY2QxZmYxYTEiLCJpYXQiOjE1Nzg0MjE5OTUsImlzcyI6Imp3dG1hbmFnZXJ8YWxnb2V4cGVydCIsInN1YiI6ImRlZmF1bHR8NmY3YzQ1OWYtZGY1Ny00NWQzLWI3N2UtYmY0MmRlYjVjMTc5In0.TGo048UvL82o7yMNQ2MqwNAO_lVDlyesk3lYiRRasIA';
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);
