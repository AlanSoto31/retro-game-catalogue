const defaultState = {
  list: [{ id: 1, name: 'Game Boy' }, { id: 2, name: 'Game Boy Advance' }],
  error: null,
};

const filterReducer = (state = defaultState, { type, payload }) => {
  let newState;
  switch (type) {
    case 'SHOW_PLATFORMS':
      newState = { ...state, list: payload };
      return newState;
    case 'SHOW_PLAT_ERROR':
      newState = { ...state, error: payload };
      return newState;
    default:
      return state;
  }
};

export default filterReducer;
