import { useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  deleteContactsThunk,
  getContactsThunk,
} from 'redux/contacts/contacts-thunk';
import css from './contactsitem.module.css';

export const ContactsItem = ({ item }) => {
  const deleteIdref = useRef(null);

  const dispatch = useDispatch();

  const handleDelete = async id => {
    deleteIdref.current = id;
    dispatch(deleteContactsThunk(id))
      .unwrap()
      .then(() => dispatch(getContactsThunk()));
  };
  return (
    <li>
      <p>
        &#8226; {item.name}: {item.number}
      </p>
      <button
        type="button"
        className={css.delete__btn}
        onClick={() => handleDelete(item.id)}
      >
        Delete
      </button>
    </li>
  );
};
ContactsItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.string.isRequired),
};
