const defaultState = {
  list: [{ id: 1, name: 'Banjo Kazoe' }, { id: 2, name: 'Golden eye' }],
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
