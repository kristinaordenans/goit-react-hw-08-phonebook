import { createSlice } from '@reduxjs/toolkit';
import { initialStateContants } from './initialState';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { fetchContact, addContact, deleteContact } from './operations';

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialStateContants,
  reducers: {
    filterContacts: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: {
    [fetchContact.pending](state) {
      state.isLoading = true;
    },
    [fetchContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [fetchContact.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items.push(payload);
    },
    [addContact.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      const contacts = state.items.filter(contact => contact.id !== payload.id);
      state.items = contacts;
    },
    [deleteContact.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const contactsReducer = contactSlice.reducer;
export const persisteReducerContacts = persistReducer(persistConfig, contactsReducer);
export const { filterContacts } = contactSlice.actions;