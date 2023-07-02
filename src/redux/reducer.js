import { persisteReducer } from './contacts/contactSlice';
import { persisteReducerAuth } from './auth/authSlice';

export const reducer = {
  contacts: persisteReducer,
  auth: persisteReducerAuth
};