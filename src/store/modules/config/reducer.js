import produce from 'immer';

const INITIAL_STATE = {
  history: [],
  favoriteLanguage: 'python',
  showFavorites: true,
  difficulty: 1,
  maxHistory: 100,
  recordHistory: true,
  reload: true,
};

export default function config(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@config/HISTORY_PUSH': {
        if (draft.recordHistory) {
          if (draft.history.length <= 0) {
            draft.history.unshift({
              content: action.payload,
              time: new Date(),
            });
          } else if (draft.history[0].content !== action.payload) {
            draft.history.unshift({
              content: action.payload,
              time: new Date(),
            });

            if (draft.history.length >= 100) {
              draft.history.pop();
            }
          }
        }

        break;
      }

      case '@config/HISTORY_DELETE': {
        draft.history = [];
        draft.reload = true;
        break;
      }

      case '@config/SWITCH_FAVORITES': {
        draft.showFavorites = !draft.showFavorites;
        draft.reload = true;
        break;
      }

      case '@config/SWITCH_HISTORY': {
        draft.recordHistory = !draft.recordHistory;
        break;
      }

      case '@config/CHANGE_LANGUAGE': {
        draft.favoriteLanguage = action.payload;
        break;
      }

      case '@config/CHANGE_MAX_HISTORY': {
        draft.maxHistory = action.payload;
        break;
      }

      case '@config/CHANGE_DIFFICULTY': {
        draft.difficulty = action.payload;
        draft.reload = true;
        break;
      }

      case '@config/SET_RELOAD': {
        draft.reload = false;
        break;
      }

      default:
    }
  });
}
