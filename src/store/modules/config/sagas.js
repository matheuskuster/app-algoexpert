import { takeLatest, put, all } from 'redux-saga/effects';

import languages from '~/assets/data/languages';

import formatDifficulty from '~/util/question';

import { historyPush } from './actions';

export function* changeMaxHistoryRecord({ payload }) {
  yield put(historyPush(`Changed the Max History Record to ${payload}.`));
}

export function* changeFavoriteLanguage({ payload }) {
  yield put(
    historyPush(`Set ${languages[payload].formatted} as the Favorite Language.`)
  );
}

export function* changeDifficulty({ payload }) {
  yield put(
    historyPush(
      `Changed the Difficulty to ${formatDifficulty({
        Difficulty: payload,
      })}.`
    )
  );
}

export default all([
  takeLatest('@config/CHANGE_LANGUAGE', changeFavoriteLanguage),
  takeLatest('@config/CHANGE_MAX_HISTORY', changeMaxHistoryRecord),
  takeLatest('@config/CHANGE_DIFFICULTY', changeDifficulty),
]);
