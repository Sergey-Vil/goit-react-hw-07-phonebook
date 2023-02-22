import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContacts,
  deleteContacts,
  getContacts,
} from 'components/services/contactsApi';

export const getContactsThunk = createAsyncThunk(
  'contacts/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getContacts();
      return data;
    } catch {
      return rejectWithValue();
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { rejectWithValue }) => {
    try {
      const data = await addContacts(newContact);
      return data;
    } catch {
      return rejectWithValue();
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const data = await deleteContacts(id);
      return data;
    } catch {
      return rejectWithValue();
    }
  }
);
