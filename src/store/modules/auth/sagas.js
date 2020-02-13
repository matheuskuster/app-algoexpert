import { takeLatest, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';
import { historyPush } from '../config/actions';

export function* signIn() {
  try {
    yield put(signInSuccess());
    yield put(historyPush('Logged in.'));
  } catch (err) {
    yield put(signFailure());
  }
}

export function* signOut() {
  yield put(historyPush('Logged out.'));
}

export function setToken() {
  api.defaults.headers.Authorization =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNZXRhZGF0YSI6eyJhdmF0YXJfdXJsIjoiaHR0cHM6Ly9hdmF0YXJzMC5naXRodWJ1c2VyY29udGVudC5jb20vdS8yNTg2ODQxND92PTQiLCJlbWFpbCI6Im1hdGhldXNrdXN0ZXJAaG90bWFpbC5jb20iLCJuYW1lIjoiTWF0aGV1cyBLdXN0ZXIiLCJvYXV0aF9wcm92aWRlciI6ImdpdGh1YiIsIm9hdXRoX3VzZXJfaWQiOiIyNTg2ODQxNCIsInJlZ2lvbiI6ImJyYXppbCIsInJvbGVzIjoidXNlcixwcm9tb3Rpb24tMSJ9LCJleHAiOjI1OTIwMDE1ODA1MTEwNTIsImp0aSI6IjVlNjkxYzZmLTM1MDgtNDMxZC1hMThlLTQwNzBkNWE2ZDMyZiIsImlhdCI6MTU4MDUxMTA1MiwiaXNzIjoiand0bWFuYWdlcnxhbGdvZXhwZXJ0Iiwic3ViIjoiZ2l0aHVifDI1ODY4NDE0In0.C17GlFSLX1Ytzaq__g0b1ZFe-zD_6FqMYMigpA3jZKE';
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
