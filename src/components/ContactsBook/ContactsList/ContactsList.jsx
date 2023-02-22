import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactsItem } from '../ContactsItem/ContactsItem';
import { getContactsThunk } from 'redux/contacts/contacts-thunk';
import { selectFindContact } from 'redux/filter/filterSelect';

export const ContactsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);
  const contactList = useSelector(selectFindContact);
  return (
    <ul>
      {contactList.map(item => (
        <ContactsItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
