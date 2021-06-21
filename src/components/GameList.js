import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGameList } from '../redux/actions/index';
import Filter from './Filter';
import Game from './Game';

const GameList = () => {
  const list = useSelector((state) => state.games.list);
  const [cat, setCat] = useState('ALL');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGameList());
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

  const items = list.filter(check).map((game) => <Game key={game.id} game={game} />);

  return (
    <>
      <Filter onChangeFilter={handleChangeFilter} />
      <div>
        {items}
      </div>
    </>
  );
};

export default GameList;
