import React from 'react';
import css from './contactsFilter.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContactActions } from 'redux/filter/filter-slice';
import { selectFilter } from 'redux/filter/filterSelect';

const ContactsFilter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <div className={css.filter}>
      <p className={css.title__filter}>Find contacts by name</p>
      <input
        onChange={e => dispatch(filterContactActions(e.target.value))}
        name="filter"
        type="text"
        value={filter}
      />
    </div>
  );
};

export default ContactsFilter;
