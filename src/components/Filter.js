import React, { useEffect } from 'react';
import { Form } from 'react-bootstrap';
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
    <div className="my-4 d-flex justify-content-end">
      <div className="w-50">
        <Form.Label for="filter" className="filter-label">Find by your prefer platform</Form.Label>
        <Form.Control id="filter" className="w-100" as="select" name="filter" placeholder="Select an option" required onChange={(e) => onChangeFilter(e.target.value)}>
          <option value="ALL">All</option>
          {options}
        </Form.Control>
      </div>
    </div>
  );
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
