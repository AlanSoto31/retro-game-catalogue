import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

/* const Game = ({ game }) => (
  <div>
    <h3>{game.name}</h3>
    <Button type="button" classNameName="btn btn-info">
      <Link to={`/${game.guid}`}>
        See details ...
      </Link>
    </Button>
  </div>
); */

const Game = ({ game }) => (
  <div className="card">
    <img className="card-img-top" src={game.image.icon_url} alt="Card cap" />
    <div className="card-body">
      <h4 className="card-title">{game.name}</h4>
      <Link className="btn btn-primary" to={`/${game.guid}`}>
        See details ...
      </Link>
    </div>
  </div>
);

Game.propTypes = {
  game: PropTypes.objectOf.isRequired,
};

export default Game;
