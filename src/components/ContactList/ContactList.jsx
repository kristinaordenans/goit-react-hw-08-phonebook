import React from "react";
import { ContactItem } from "components/ContactItem/ContactItem";
import { ContactListContainer } from "./ContactList.styled";
import { useSelector } from "react-redux";
import { getFilteredContacts } from 'redux/contacts/selector';
import { selectItems, selectFilter } from "redux/contacts/selector";


export const ContactList = () => {
    const contacts = useSelector(selectItems);
    const filter = useSelector(selectFilter);
    const filteredContacts = getFilteredContacts(filter, contacts);

    return (
    <div>
        <ContactListContainer>
           {filteredContacts?.map(({ name, number, id })=>{
               return (
                   <ContactItem key={id}
                        id={id}
                        name={name}
                        tel={number} />
                )
             })
           }     
       </ContactListContainer>
    </div>
    )
}
