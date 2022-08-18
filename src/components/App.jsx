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
    localContacts && setContacts([...localContacts]);
  }, []);

 useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts, firstRender]);

  const deleteContact = id => {
    this.setState({
      contacts: [...this.state.contacts.filter(contact => contact.id !== id)],
    });
  };

 const handleFilterChange = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };
  
 const addContact = data => {
    return this.state.contacts.map(contact => contact.name).includes(data.name)
      ? alert(`${data.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, data],
        }));
  };

 
    
    return (
      <div className={style.container}>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} contacts={contacts} />
        <h2>Contacts</h2>
        <Filter filter={filter} handleChange={this.handleFilterChange} />
        <Contacts
          contacts={visibleContacts}
          filter={filter}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export { App };
