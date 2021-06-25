import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { fetchGameDetails } from '../redux/actions';

const GameDet = () => {
  const { guid } = useParams();
  const dispatch = useDispatch();
  const { details, error } = useSelector((state) => state.games);

  useEffect(() => {
    dispatch(fetchGameDetails(guid));
  }, []);

  const devs = details.developers.map((dev, index) => (
    index === 0 ? <span className="p-2" key={dev.id}>{dev.name}</span> : (
      <span key={dev.id}>
        <span className="p-2">|</span>
        {dev.name}
      </span>
    )
  ));

  const gens = details.genres.map((gen, index) => (
    index === 0 ? <span className="p-2" key={gen.id}>{gen.name}</span> : (
      <span key={gen.id}>
        <span className="p-2">|</span>
        {gen.name}
      </span>
    )
  ));
  const plats = details.platforms.map((plat, index) => (
    index === 0 ? <span className="p-2" key={plat.id}>{plat.name}</span> : (
      <span key={plat.id}>
        <span className="p-2">|</span>
        {plat.name}
      </span>
    )
  ));

  if (!error) {
    return (
      <Container>
        <Card className="mb-3 mt-5">
          <Row className="g-0">
            <Col md={4}>
              <Card.Img variant="top" src={details.image.super_url} />
            </Col>
            <Col md={8}>
              <Card.Body>
                <Card.Title className="font-weight-bold">{details.name}</Card.Title>
                <Card.Text>{details.deck}</Card.Text>
                <div>
                  <span className="font-weight-bold">DEVELOPER:</span>
                  {devs}
                </div>
                <div className="mt-2">
                  <span className="font-weight-bold">GENRE:</span>
                  {gens}
                </div>
                <div className="mt-2">
                  <span className="font-weight-bold">PLATFORM:</span>
                  {plats}
                </div>
                <div className="mt-2">
                  <span className="font-weight-bold">REALESE DATE:</span>
                  <span className="p-2">{details.original_release_date}</span>
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    );
  }
  return <h1 className="mt-5 text-white d-flex justify-content-center">{error}</h1>;
};

export default GameDet;
