import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContact = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
    try {
        const {data} = await axios.get('/contacts');
        return data;
    } catch (err) {
        return thunkAPI.rejectWithalue(err.message)
    }
    }
);


export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const {data} = await axios.post("/contacts", contact);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contact, thunkAPI) => {
    try {
      const {data} = await axios.delete(`/contacts/${contact.id}`);
      return await data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export default fetchContact;
