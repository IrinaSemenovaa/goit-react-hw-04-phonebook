import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import SearchBar from './SearchBar/SearchBar';
import ContactList from './ContactList/ContactList';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem('contacts');
    const initialValue = JSON.parse(saved);
    return initialValue || '';
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storedContacts) {
      setContacts(storedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (name, number) => {
    const existingContact = contacts.find(
      contact => contact.name === name || contact.number === number
    );

    if (existingContact) {
      alert(`Contact with name ${name} or number ${number} already exists`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevState => [...prevState, newContact]);
    setFilter('');
  };

  const handleDeleteContact = id => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <SearchBar handleFilterChange={handleFilterChange}></SearchBar>
      <ContactList
        contacts={filteredContacts}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
}
