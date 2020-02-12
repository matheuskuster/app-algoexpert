import { takeLatest, put, all } from 'redux-saga/effects';

import { historyRequest } from '../config/actions';

export function* watchVideo({ payload }) {
  yield put(historyRequest(`Watched the video: ${payload.name}`));
}

export function* unwatchVideo({ payload }) {
  yield put(historyRequest(`Marked the video ${payload.name} as Not Watched`));
}

export default all([
  takeLatest('@video/WATCH_REQUEST', watchVideo),
  takeLatest('@video/UNWATCH_REQUEST', unwatchVideo),
]);
