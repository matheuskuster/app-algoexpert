import { takeLatest, put, all } from 'redux-saga/effects';

import { historyPush } from '../config/actions';

export function* watchVideo({ payload }) {
  yield put(historyPush(`Watched the video: ${payload.name}`));
}

export function* unwatchVideo({ payload }) {
  yield put(historyPush(`Marked the video ${payload.name} as Not Watched`));
}

export default all([
  takeLatest('@video/WATCH_REQUEST', watchVideo),
  takeLatest('@video/UNWATCH_REQUEST', unwatchVideo),
]);
