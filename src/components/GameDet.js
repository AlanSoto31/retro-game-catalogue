import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGameDetails } from '../redux/actions';

const GameDet = () => {
  const { guid } = useParams();
  const dispatch = useDispatch();
  const gameDetails = useSelector((state) => state.games.details);

  useEffect(() => {
    dispatch(fetchGameDetails(guid));
  }, []);

  return (
    <div>
      <h1>{gameDetails.name}</h1>
    </div>
  );
};

export default GameDet;
