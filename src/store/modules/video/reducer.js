import produce from 'immer';

const INITIAL_STATE = {
  watched: [],
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@video/WATCH_REQUEST': {
        draft.watched.push(action.payload);
        break;
      }

      case '@video/UNWATCH_REQUEST': {
        draft.watched = draft.watched.filter(
          watched => watched.name !== action.payload.name
        );
        break;
      }

      default:
    }
  });
}
