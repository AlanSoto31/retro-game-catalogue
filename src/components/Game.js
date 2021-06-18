import React from 'react';
import PropTypes from 'prop-types';

const Game = ({ game }) => (
  <div>
    <h3>{game.name}</h3>
    <button type="button">see details...</button>
  </div>
);

Game.propTypes = {
  game: PropTypes.objectOf.isRequired,
};

export default Game;
