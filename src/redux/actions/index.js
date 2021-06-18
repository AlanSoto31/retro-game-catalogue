export const showGames = (games) => ({
  type: 'SHOW_GAMES',
  payload: games,
});

export const showPlatforms = (platforms) => ({
  type: 'SHOW_PLATFORMS',
  payload: platforms,
});

export const fetchData = () => async (dispatch) => {
  const games = await fetch('https://frozen-shelf-35879.herokuapp.com/https://www.giantbomb.com/api/games/?api_key=a49d1e3f0d18a6120a595dd1d2b6d2f4c8278c5b&format=json&limit=50&field_list=image,description,deck,name,platforms').then((res) => res.json());
  dispatch(showGames(games.results));
};

export const fetchPlatforms = () => async (dispatch) => {
  const platforms = await fetch('https://frozen-shelf-35879.herokuapp.com/https://www.giantbomb.com/api/platforms/?api_key=a49d1e3f0d18a6120a595dd1d2b6d2f4c8278c5b&format=json&field_list=id,name&limit=20').then((res) => res.json());
  dispatch(showPlatforms(platforms.results));
};
