import produce from 'immer';

const INITIAL_STATE = {
  history: [],
  favoriteLanguage: 'python',
  showFavorites: true,
  difficulty: 1,
  maxHistory: 100,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@history/HISTORY_REQUEST': {
        if (draft.history.length <= 0) {
          draft.history.unshift({
            content: action.payload,
            timestamp: new Date(),
          });
        } else if (draft.history[0].content !== action.payload) {
          draft.history.unshift({
            content: action.payload,
            timestamp: new Date(),
          });

          if (draft.history.length >= 100) {
            draft.history.pop();
          }
        }

        break;
      }

      default:
    }
  });
}
