import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContact } from 'redux/contacts/operations';
import { ContactForm } from '../components/ContacForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
// import { ContactsTitle } from '../components/App.styled';
import { Filter } from '../components/FilterContacts/FilterContacts';
import { selectItems } from 'redux/contacts/selector';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectItems);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <>
      <h2>Add contact</h2>
      <ContactForm />
      {contacts?.length > 1 && <Filter />}
      <ContactList />
    </>
  );
}