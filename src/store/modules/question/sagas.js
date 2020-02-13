import { takeLatest, put, all } from 'redux-saga/effects';

import { historyPush } from '../config/actions';

export function* favoriteQuestion({ payload }) {
  yield put(historyPush(`Marked ${payload.Name} question as favorite.`));
}

export function* unfavoriteQuestion({ payload }) {
  yield put(historyPush(`Unmarked ${payload.Name} question as favorite.`));
}

export default all([
  takeLatest('@question/FAVORITE_REQUEST', favoriteQuestion),
  takeLatest('@question/UNFAVORITE_REQUEST', unfavoriteQuestion),
]);
