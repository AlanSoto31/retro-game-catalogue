import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../redux/actions/index';
import Filter from './Filter';

const AnimeList = () => {
  const list = useSelector((state) => state.games.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
    // dispatch(fetchCategories());
  }, []);

  const handleChangeFilter = (value) => {
    console.log(value);
  };

  const items = list.map((game) => <li key={game.id}>{game.name}</li>);

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
