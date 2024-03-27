import { useEffect } from "react";
import "./App.css";
import ContactList from "./components/contactList/ContactList";
import ContactForm from "./components/contactForm/ContactForm";
import SearchBox from "./components/searchBox/SearchBox";
import { useDispatch } from "react-redux";
import { addContact, deleteContact } from "./redux/contactsSlice";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm
        addContact={(newContact) => dispatch(addContact(newContact))}
      />
      <SearchBox />
      <ContactList deleteContact={(id) => dispatch(deleteContact(id))} />
    </>
  );
}

export default App;
