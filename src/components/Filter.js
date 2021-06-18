import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../redux/actions/index';

const Filter = ({ onChangeFilter }) => {
  const categoryOptions = useSelector((state) => state.categories.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const options = categoryOptions.map((item) => (
    <option key={item.id} value={item.name}>{item.name}</option>
  ));

  return (
    <select name="filter" required onChange={(e) => onChangeFilter(e.target.value)}>
      {options}
    </select>
  );
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
