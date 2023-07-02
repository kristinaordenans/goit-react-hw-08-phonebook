import { FindContactInput, SearchTitle } from "./FilterContacts.styled";
import { selectFilter } from "redux/contacts/selector";
import { filterContacts } from "redux/contacts/contactSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";




export const Filter = () => {
   const filteValue = useSelector(selectFilter);
   const dispatch = useDispatch();
   const changeFilter = e => dispatch(filterContacts(e.currentTarget.value));

    return (
        <div>
            <SearchTitle>Find contacts by name</SearchTitle>
            <FindContactInput type="text" value={filteValue} onChange={changeFilter}  />
        </div>
    )
}
