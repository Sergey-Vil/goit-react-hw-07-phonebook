import { selectContacts } from 'redux/contacts/contactSelector';

export const selectFilter = state => state.filter;

export const selectFindContact = state => {
  const filter = selectFilter(state);
  const contacts = selectContacts(state);
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
