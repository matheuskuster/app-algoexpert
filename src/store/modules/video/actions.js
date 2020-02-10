export function watchRequest(payload) {
  return {
    type: '@video/WATCH_REQUEST',
    payload,
  };
}

export function unwatchRequest(payload) {
  return {
    type: '@video/UNWATCH_REQUEST',
    payload,
  };
}
