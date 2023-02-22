import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { addContactsThunk } from 'redux/contacts/contacts-thunk';
import { selectContacts } from 'redux/contacts/contactSelector';
import css from './contacnsForm.module.css';

export const ContactsForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const contacts = useSelector(selectContacts);
  const hanleSubmit = e => {
    e.preventDefault();
    const newContact = { name, number };
    contacts.some(
      contact =>
        contact.name.toLowerCase().trim() === name.toLowerCase().trim() ||
        contact.number.trim() === number.trim()
    )
      ? alert(`${newContact.name} already exists`)
      : dispatch(addContactsThunk(newContact));
    setNumber('');
    setName('');
  };

  return (
    <form onSubmit={hanleSubmit} className={css.form}>
      <label className="css.label__name" htmlFor="name">
        Name
      </label>
      <input
        onChange={handleChange}
        type="text"
        minLength={3}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
        required
      />
      <label className="css.label__name" htmlFor="number">
        Number
      </label>
      <input
        onChange={handleChange}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={number}
        required
      />
      <button className={css.btn__submit} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactsForm;
