import { useState, useEffect } from "react";
import "./App.css";
import Contact from "./components/contact/Contact";
import ContactList from "./components/contactList/ContactList";
import ContactForm from "./components/contactForm/ContactForm";
import SearchBox from "./components/searchBox/SearchBox";

function App() {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem("contacts");
    return storedContacts
      ? JSON.parse(storedContacts)
      : [
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ];
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };
  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };
  const [searchContact, setSearchContact] = useState("");
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchContact.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} contacts={contacts} />
      <SearchBox
        searchContact={searchContact}
        setSearchContact={setSearchContact}
      />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </>
  );
}

export default App;
