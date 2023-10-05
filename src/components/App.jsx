import AddContact from './AddContact/AddContact';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  return (
    <>
      <h1>Phonedook</h1>
      <AddContact />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default App;
