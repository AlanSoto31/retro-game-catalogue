import React from 'react';
// import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom';

const GameDet = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

/* GameDet.propTypes = {

} */

export default GameDet;
