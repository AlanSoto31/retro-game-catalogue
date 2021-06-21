import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import { fetchGameList } from '../redux/actions/index';
import Filter from './Filter';
import Game from './Game';

const GameList = () => {
  const list = useSelector((state) => state.games.list);
  const loading = useSelector((state) => state.games.loading);
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

  const items = list.filter(check).map(
    (game) => <Game key={game.guid} game={game} />,
  );

  return (
    <>
      <Container>
        <Filter onChangeFilter={handleChangeFilter} />
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
          {loading ? items : (
            <div className="col">
              <Spinner
                animation="border"
                role="status"
              />
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default GameList;
