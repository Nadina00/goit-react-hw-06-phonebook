import React from 'react';
import PropTypes from 'prop-types';
import { List, Btn } from './ContactList.styled';

export const ContactList = ({ contacts, onLeaveFeedback }) =>
  contacts.map(({ id, name, number }) => {
    return (
      <List key={id}>
        {name}: {number}
        <Btn type="button" onClick={() => onLeaveFeedback(id)} id={id}>
          Delete
        </Btn>
      </List>
    );
  });

ContactList.protoType = {
  onClick: PropTypes.func.isRequired,
};
