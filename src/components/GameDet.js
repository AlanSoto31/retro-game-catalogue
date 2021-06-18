import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchGameDetails } from '../redux/actions';

const GameDet = () => {
  const { guid } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGameDetails(guid));
  }, []);

  return (
    <div>
      <h1>{guid}</h1>
    </div>
  );
};

export default GameDet;
