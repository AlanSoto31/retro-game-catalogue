const defaultState = [{ id: 1, name: 'Banjo Kazoe' }, { id: 2, name: 'Golden eye' }];

const gamesReducer = (state = defaultState, { type }) => {
  const newState = [...state];
  switch (type) {
    case 'SHOw_GAMES':
      return newState;
    default:
      return state;
  }
};

export default gamesReducer;
