import AddContact from './AddContact/AddContact';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { useSelector, useDispatch } from 'react-redux';
import { add, remove, addFilter } from '../redux/slice.js';

const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispath = useDispatch();

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
      dispath(add(values));
    }
  }

  function getFilterContacts() {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  }

  function onFilterInputChange(event) {
    dispath(addFilter(event.target.value));
  }

  function onDeleteContact(id) {
    dispath(remove(id));
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
