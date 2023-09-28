import { useState, useEffect } from 'react';
import AddContact from './AddContact/AddContact';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem('contacts'));
    if (item) {
      setContacts(item);
    }
  }, []);

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } else {
      localStorage.removeItem('contacts');
    }
  }, [contacts]);

  function onAddNewContact(values) {
    if (
      contacts.some(
        contact =>
          contact.name.toLowerCase().trim() === values.name.toLowerCase().trim()
      )
    ) {
      alert(`${values.name} is already in contacts!`);
      return;
    } else {
      setContacts([...contacts, values]);
    }
  }

  function getFilterContacts() {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  }

  function onFilterInputChange(event) {
    setFilter(event.target.value);
  }

  function onDeleteContact(id) {
    setContacts(contacts.filter(contact => contact.id !== id));
  }

  return (
    <>
      <h1>Phonedook</h1>
      <AddContact onAddNewContact={onAddNewContact}></AddContact>
      <h2>Contacts</h2>
      <Filter
        onFilterInputChange={onFilterInputChange}
        array={contacts}
      ></Filter>
      <ContactList
        array={getFilterContacts()}
        onDeleteContact={onDeleteContact}
      ></ContactList>
    </>
  );
};

export default App;
