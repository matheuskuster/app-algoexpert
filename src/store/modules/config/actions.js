export function historyPush(payload) {
  return {
    type: '@config/HISTORY_PUSH',
    payload,
  };
}

export function deleteHistory(payload) {
  return {
    type: '@config/HISTORY_DELETE',
    payload,
  };
}

export function switchShowFavorites(payload) {
  return {
    type: '@config/SWITCH_FAVORITES',
    payload,
  };
}

export function switchRecordHistory(payload) {
  return {
    type: '@config/SWITCH_HISTORY',
    payload,
  };
}

export function changeLanguage(payload) {
  return {
    type: '@config/CHANGE_LANGUAGE',
    payload,
  };
}

export function changeMaxHistory(payload) {
  return {
    type: '@config/CHANGE_MAX_HISTORY',
    payload,
  };
}

export function changeDifficulty(payload) {
  return {
    type: '@config/CHANGE_DIFFICULTY',
    payload,
  };
}

export function setReload(payload) {
  return {
    type: '@config/SET_RELOAD',
    payload,
  };
}
