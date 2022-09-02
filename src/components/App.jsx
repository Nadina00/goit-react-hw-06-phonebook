import React, { useState, useEffect } from 'react';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { createAction } from "@reduxjs/toolkit";
import PropTypes from 'prop-types';

import { useSelector } from "react-redux";

export function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  


    useEffect(() => {
    const contact = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contact);
    if (parseContacts) {
      setContacts(parseContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContactList = data => {
    const searchName = data.name.toLowerCase();
    contacts.find(contact => contact.name.toLowerCase() === searchName)
      ? alert('contact is already in contacts')
      : setContacts(prevCont => [...prevCont, data]);
  };

  const handleDelete = contId => {
    setContacts(prevCont => prevCont.filter(({ id }) => id !== contId));
  };

  const handleFindChange = evt => {
    setFilter(evt.target.value);
  };

  const getVisibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContactList} />
      <h2>Contacts</h2>
      <ul>
        <ContactList
          contacts={getVisibleContacts}
          onLeaveFeedback={handleDelete}
        />
      </ul>
      <Filter value={filter} onChange={handleFindChange} />
    </div>
  );
}

App.protoType = {
  state: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  filter: PropTypes.string.isRequired,
};
