import { createSlice } from '@reduxjs/toolkit';
import {
  addContactsThunk,
  deleteContactsThunk,
  getContactsThunk,
} from './contacts-thunk';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(getContactsThunk.rejected, state => {
        state.isLoading = false;
      })

      .addCase(addContactsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContactsThunk.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isLoading = false;
        state.items.push(payload);
      })
      .addCase(addContactsThunk.rejected, state => {
        state.isLoading = false;
      })
      .addCase(deleteContactsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContactsThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload.id);
      })
      .addCase(deleteContactsThunk.rejected, state => {
        state.isLoading = false;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
