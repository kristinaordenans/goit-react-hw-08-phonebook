import { Item, P, DeliteBtn } from './ContactItem.styled';
import { deleteContact } from "redux/contacts/operations";
import { useDispatch } from "react-redux";


export const ContactItem = ({ name, id, tel }) => {
    const dispatch = useDispatch();
 const contactNameAndId = { id, name };
  const hanldeDelete = () => {
    dispatch(deleteContact(contactNameAndId));
  };
    return (<Item>
        <P>{name}: <span>{tel}</span></P>
        <DeliteBtn type = "button" onClick={hanldeDelete}>delete</DeliteBtn>
   </Item>)
}

