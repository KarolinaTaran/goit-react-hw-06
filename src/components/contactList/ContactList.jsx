import React from "react";
import Contact from "../contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div className={css.contactWrapper}>
      {contacts.map((contact) => (
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
