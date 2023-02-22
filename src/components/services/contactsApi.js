import axios from 'axios';

const contactsServices = axios.create({
  baseURL: 'https://63f3e2c3fe3b595e2eea9527.mockapi.io/contacts',
});

export const getContacts = async () => {
  const { data } = await contactsServices.get('');
  return data;
};
export const addContacts = async newContact => {
  const { data } = await contactsServices.post('', newContact);
  return data;
};
export const deleteContacts = async id => {
  const { data } = await contactsServices.delete(id);
  return data;
};
