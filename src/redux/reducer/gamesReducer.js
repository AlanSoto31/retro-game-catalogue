const defaultState = {
  loading: false,
  list: [{
    id: 1, name: 'Banjo Kazoe', platforms: [{ name: 'Nintendo' }, { name: 'Cubo' }], image: { icon_url: 'fuckyou' },
  }, {
    id: 2, name: 'Golden eye', platforms: [{ name: 'Nintendo' }, { name: 'Cubo' }], image: { icon_url: 'fuckyou' },
  }],
  details: [{ id: 1, name: 'Banjo Kazoe', platforms: [{ name: 'Nintendo' }, { name: 'Cubo' }] }],
};

const gamesReducer = (state = defaultState, { type, payload }) => {
  let newState;
  switch (type) {
    case 'SHOW_GAMES':
      newState = { ...state, list: payload };
      return newState;
    case 'SHOW_GAME_DETAILS':
      newState = { ...state, details: payload };
      return newState;
    case 'SET_LOADING':
      newState = { ...state, loading: payload };
      return newState;
    default:
      return state;
  }
};

export default gamesReducer;
