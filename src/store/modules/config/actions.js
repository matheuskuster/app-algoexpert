export function historyRequest(payload) {
  return {
    type: '@history/HISTORY_REQUEST',
    payload,
  };
}

export function deleteHistory(payload) {
  return {
    type: '@history/DELETE',
    payload,
  };
}
