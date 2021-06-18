const defaultState = {
  list: [{ id: 1, name: 'Game Boy' }, { id: 2, name: 'Game Boy Advance' }],
};

const filterReducer = (state = defaultState, { type, payload }) => {
  let newState;
  switch (type) {
    case 'SHOW_CATEGORIES':
      newState = { ...state, list: payload };
      return newState;
    default:
      return state;
  }
};

export default filterReducer;
