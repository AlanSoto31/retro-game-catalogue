import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Game = ({ game }) => (
  <div>
    <h3>{game.name}</h3>
    <button type="button">
      <Link to={`/${game.guid}`}>
        See details ...
      </Link>
    </button>
  </div>
);

Game.propTypes = {
  game: PropTypes.objectOf.isRequired,
};

export default Game;
