import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../redux/actions/index';

const AnimeList = () => {
  const list = useSelector((state) => state.games.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

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
