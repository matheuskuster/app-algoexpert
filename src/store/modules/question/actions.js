export function favoriteRequest(payload) {
  return {
    type: '@question/FAVORITE_REQUEST',
    payload,
  };
}

export function unfavoriteRequest(payload) {
  return {
    type: '@question/UNFAVORITE_REQUEST',
    payload,
  };
}
