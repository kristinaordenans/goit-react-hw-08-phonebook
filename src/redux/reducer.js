import { persisteReducerContacts } from './contacts/contactSlice';
import { persisteReducerAuth } from './auth/authSlice';

export const reducer = {
  contacts: persisteReducerContacts,
  auth: persisteReducerAuth
};