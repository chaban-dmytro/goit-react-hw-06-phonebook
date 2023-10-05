import React from 'react';
import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addFilter } from '../../redux/slice';

const Filter = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispath = useDispatch();

  function onFilterInputChange(event) {
    dispath(addFilter(event.target.value));
  }

  if (contacts.length === 0) {
    return;
  } else {
    return (
      <>
        <label className={css.label} htmlFor="filter">
          Find contacts by name
        </label>
        <input
          className={css.input}
          id="filter"
          name="filter"
          type="text"
          onChange={onFilterInputChange}
        />
      </>
    );
  }
};

export default Filter;
