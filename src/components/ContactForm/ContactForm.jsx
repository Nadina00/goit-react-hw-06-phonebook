import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Input, Btn } from './ContactForm.styled';


export function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [id, setId] = useState('');

  
  const handleChangeName = evt => {
    setName(evt.target.value);
    setId(nanoid());
  };

  const handleChangeNumber = evt => {
    setNumber(evt.target.value);
  };

  const handleSubmitForm = evt => {
    evt.preventDefault();
    onSubmit({ name, number, id });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <label htmlFor={id}>
        Name
        <Input
          type="text"
          value={name}
          onChange={handleChangeName}
          name="name"
          id={id}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor="">
        Number
        <Input
          type="tel"
          value={number}
          onChange={handleChangeNumber}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <Btn type="submit">Add contact</Btn>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  name: PropTypes.string,
  number: PropTypes.number,
  id: PropTypes.string,
};
