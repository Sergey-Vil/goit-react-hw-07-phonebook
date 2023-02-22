import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContactActions(_, { payload }) {
      return payload;
    },
  },
});
export const { filterContactActions } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
