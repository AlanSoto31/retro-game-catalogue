const defaultState = {
  list: [{ id: 1, name: 'Banjo Kazoe', platforms: [{ name: 'Nintendo' }, { name: 'Cubo' }] }, { id: 2, name: 'Golden eye', platforms: [{ name: 'Nintendo' }, { name: 'Cubo' }] }],
};

const gamesReducer = (state = defaultState, { type, payload }) => {
  let newState;
  switch (type) {
    case 'SHOW_GAMES':
      newState = { ...state, list: payload };
      return newState;
    default:
      return state;
  }
};

export default gamesReducer;
