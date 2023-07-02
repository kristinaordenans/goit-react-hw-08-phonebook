import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Label, Input, Span } from "./ContactForm.styled";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { selectItems } from "redux/contacts/selector";
import { addContact } from "redux/contacts/operations";


export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setPhone] = useState('');
  const dispatch = useDispatch();
  const formReff = useRef(null);
  const  contacts  = useSelector(selectItems);

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      
      case 'number':
        setPhone(e.target.value);
        break;
      
      default:
        return;
    }
  };


  const handlrAddToContactList = (e) => {
    e.preventDefault();
      const isIncludeContactNumber = contacts?.find(
      contact => contact.number === number
    );

    if (isIncludeContactNumber) {
      alert(`'${number}'is alredy in contacts`)
    } else {
      const contact = { name, number };
      dispatch(addContact(contact));
      setName('');
      setPhone('');
    }
  }

  return (
    <Form onSubmit={handlrAddToContactList} ref={formReff}>
            <Label>
              <Span>Name</Span>
              <Input type="text"
                 value={name}
                 onChange={handleChange}
                 name="name"
                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Type your name..."
          required />
              </Label>
            <Label>
              <Span>Phone</Span>
              <Input type="tel"
                 value={number}
                 onChange={handleChange}
                 name="number"
                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        placeholder="Type your number..."/>
              </Label>
            <Button type="submit">Add contact</Button>
          </Form>
  )
}
