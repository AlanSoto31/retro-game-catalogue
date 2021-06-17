export const showGames = (games) => ({
  type: 'SHOW_GAMES',
  payload: games,
});

export const fetchData = () => async (dispatch) => {
  const games = await fetch('https://frozen-shelf-35879.herokuapp.com/https://www.giantbomb.com/api/games/?api_key=a49d1e3f0d18a6120a595dd1d2b6d2f4c8278c5b&format=json&limit=50&field_list=image,description,deck,name&filter=platforms:3').then((res) => res.json());
  dispatch(showGames(games.results));
};