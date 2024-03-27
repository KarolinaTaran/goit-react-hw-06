import { createSelector, createSlice } from "@reduxjs/toolkit";

// const LOCAL_STORAGE_KEY = "contacts";

// const loadContactsFromLocalStorage = () => {
//   const orderedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
//   return orderedContacts ? JSON.parse(orderedContacts) : [];
// };

// const saveContactsToLocalStorage = (contacts) => {
//   try {
//     const orderedContacts = JSON.stringify(contacts);
//     localStorage.setItem(LOCAL_STORAGE_KEY, orderedContacts);
//   } catch (error) {
//     console.error("Error saving contacts to localStorage:", error);
//   }
// };

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
      // saveContactsToLocalStorage(state.items);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
      // saveContactsToLocalStorage(state.items);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

export const selectContacts = (state) => state.contacts.items;
