import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPlatforms } from '../redux/actions/index';

const Filter = ({ onChangeFilter }) => {
  const platformOptions = useSelector((state) => state.platforms.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlatforms());
  }, []);

  const options = platformOptions.map((item) => (
    <option key={item.id} value={item.name}>{item.name}</option>
  ));

  return (
    <select name="filter" required onChange={(e) => onChangeFilter(e.target.value)}>
      <option value="ALL">All</option>
      {options}
    </select>
  );
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
