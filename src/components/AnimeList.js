// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const AnimeList = () => {
  const list = useSelector((state) => state.games);

  /* const [listGames, setListGames] = useState([]); */

  /*   const fetchGames = async () => {
    const games = await fetch('https://frozen-shelf-35879.herokuapp.com/https://www.giantbomb.com/api/games/?api_key=a49d1e3f0d18a6120a595dd1d2b6d2f4c8278c5b&format=json&limit=50&field_list=image,description,deck,name&filter=platforms:3').then((res) => res.json());
    setListGames(games.results);
  }; */

  /*   useEffect(() => {
    fetchGames();
  }, []);
 */

  const items = list.map((game) => <li key={game.id}>{game.name}</li>);

  return (
    <>
      <ul>
        {items}
      </ul>
    </>
  );
};

export default AnimeList;
