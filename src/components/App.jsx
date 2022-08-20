import { useState, useEffect, useLayoutEffect } from 'react';

import { ContactForm } from 'components/ContactForm/ContactForm';
import Contacts from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import style from './App.module.css';

import { nanoid } from 'nanoid';

function App ()  {
  const [contacts, setContacts] = useState([
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');
  const [firstRender, setFirstRender] = useState(true);

   useLayoutEffect(() => {
    const localContacts = JSON.parse(localStorage.getItem('contacts'));
    localContacts && setContacts(localContacts);
  }, []);

 useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts, firstRender]);

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

 const handleFilterChange = event => {
  setFilter(event.target.value)
  };
  
 const addContact = data => {
  return contacts.map(contact => contact.name).includes(data.name)
  ? alert(`${data.name} is already in contacts`)
  : setContacts(prevState => [...prevState, data]);
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()));
    
    return (
      <div className={style.container}>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} contacts={contacts} />
        <h2>Contacts</h2>
        <Filter filter={filter} handleChange={handleFilterChange} />
        <Contacts
          contacts={visibleContacts}
          filter={filter}
          deleteContact={deleteContact}
        />
      </div>
    );
  }


export { App };
