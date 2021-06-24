const defaultState = {
  loading: false,
  list: [{
    guid: 1, name: '', platforms: [{ name: '' }, { name: '' }], image: { icon_url: '' },
  }, {
    guid: 2, name: '', platforms: [{ name: '' }, { name: '' }], image: { icon_url: '' },
  }],
  details:
    {
      deck: '',
      name: '',
      platforms: [
        { name: '' },
        { name: '' },
      ],
      image: {
        super_url: '',
        original_url: '',
      },
      developers: [{ name: '' }, { name: '' }],
      genres: [{ name: '' }, { name: '' }],
      original_release_date: '',
    },
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
