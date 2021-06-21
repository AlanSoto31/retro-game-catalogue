import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Game = ({ game }) => (
  <div className="col mb-4">
    <div className="card h-100">
      <img className="card-img-top gameList-card-img" src={game.image.medium_url} alt="Card cap" />
      <div className="card-body d-flex flex-column">
        <h4 className="card-title cardTitle">{game.name}</h4>
        <Link className="btn btn-info mt-auto" to={`/${game.guid}`}>
          Details...
        </Link>
      </div>
    </div>
  </div>

);

Game.propTypes = {
  game: PropTypes.objectOf.isRequired,
};

export default Game;
