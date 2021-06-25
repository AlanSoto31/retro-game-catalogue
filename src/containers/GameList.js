import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { fetchGameList } from '../redux/actions/index';
import Filter from '../components/Filter';
import Game from '../components/Game';

const GameList = () => {
  const list = useSelector((state) => state.games.list);
  const loading = useSelector((state) => state.games.loading);
  const error = useSelector((state) => state.games.error);
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

  if (!error) {
    return (
      <>
        <Container className="mt-4">
          <Filter onChangeFilter={handleChangeFilter} />
          <Row className="g-4">
            { loading ? items : (
              <Col className="d-flex justify-content-center spinner">
                <Spinner
                  animation="border"
                  role="status"
                />
              </Col>
            ) }
          </Row>
        </Container>
      </>
    );
  }
  return <h1 className="mt-5 text-white d-flex justify-content-center">{error}</h1>;
};

export default GameList;
