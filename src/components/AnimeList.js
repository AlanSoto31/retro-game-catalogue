import React, { useState, useEffect } from 'react';

const AnimeList = () => {
  const [listGames, setListGames] = useState([]);

  const fetchGames = async () => {
    const games = await fetch('https://frozen-shelf-35879.herokuapp.com/https://www.giantbomb.com/api/games/?api_key=a49d1e3f0d18a6120a595dd1d2b6d2f4c8278c5b&format=json&limit=50&field_list=image,description,deck,name&filter=platforms:3').then((res) => res.json());
    setListGames(games.results);
  };

  useEffect(() => {
    fetchGames();
  }, []);

  const clickEvent = () => {
    console.log(listGames);
  };

  const items = listGames.map((game) => <li key={game.id}>{game.name}</li>);

  return (
    <>
      <button type="button" onClick={clickEvent}>print list</button>
      <ul>
        {items}
      </ul>
    </>
  );
};

export default AnimeList;
