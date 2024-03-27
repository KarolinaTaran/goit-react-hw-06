import React from "react";
import Contact from "../contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts, deleteContact } from "../../redux/contactsSlice";
import { useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const nameFilter = useSelector(selectNameFilter);

  const filteredContacts = nameFilter
    ? contacts.filter((contact) =>
        contact.name.toLowerCase().includes(nameFilter.toLowerCase())
      )
    : contacts;

  return (
    <div className={css.contactWrapper}>
      {filteredContacts.map((contact) => (
        <Contact
          contact={contact}
          key={contact.id}
          deleteContact={deleteContact}
        />
      ))}
    </div>
  );
};

export default ContactList;
