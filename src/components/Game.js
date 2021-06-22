import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Game = ({ game }) => (
  <Col sm={12} md={6} lg={4} className="mb-4">
    <Card className="h-100">
      <Card.Img variant="top" className="gameList-card-img" src={game.image.medium_url} />
      <Card.Body className="d-flex flex-column justify-content-end">
        <Card.Title className="font-weight-bold">
          <Link className="card-title cardTitle" to={`/${game.guid}`}>
            {game.name}
          </Link>
        </Card.Title>
      </Card.Body>
    </Card>
  </Col>
);

Game.propTypes = {
  game: PropTypes.objectOf.isRequired,
};

export default Game;
