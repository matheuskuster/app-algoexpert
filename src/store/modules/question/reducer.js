import produce from 'immer';

const INITIAL_STATE = {
  favorites: [],
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@question/FAVORITE_REQUEST': {
        draft.favorites.push(action.payload);
        break;
      }

      case '@question/UNFAVORITE_REQUEST': {
        draft.favorites = draft.favorites.filter(
          favorite => favorite.Name !== action.payload.Name
        );
        break;
      }

      default:
    }
  });
}
