// SearchComponent.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../redux/actions';

const SearchComponent = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value ));
  };


  return (
    <div>
      <input type="text" placeholder=' Search for places..' onChange={handleChange} />
    </div>
  );
};

export default SearchComponent;
