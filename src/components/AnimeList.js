import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../redux/actions/index';
import Filter from './Filter';

const AnimeList = () => {
  const list = useSelector((state) => state.games.list);
  const [cat, setCat] = useState('ALL');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const handleChangeFilter = (value) => {
    setCat(value);
  };

  const check = (game) => {
    let r;
    const platTrue = game.platforms.filter((plat) => plat.name === cat || cat === 'ALL');
    if (platTrue.length) r = game;
    return r;
  };

  const items = list.filter(check).map((game) => <li key={game.id}>{game.name}</li>);

  return (
    <>
      <Filter onChangeFilter={handleChangeFilter} />
      <ul>
        {items}
      </ul>
    </>
  );
};

export default AnimeList;
