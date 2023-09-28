import { Button } from '@mui/material';
import React from 'react';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ array, onDeleteContact }) => {
  if (array.length === 0) {
    return;
  } else {
    return (
      <ul className={css.items}>
        {array.map(contact => {
          return (
            <li className={css.item} key={contact.id}>
              <span>{contact.name}: </span>
              <span>{contact.phone}</span>
              <Button
                type="button"
                variant="contained"
                onClick={() => onDeleteContact(contact.id)}
              >
                Delete
              </Button>
            </li>
          );
        })}
      </ul>
    );
  }
};

ContactList.propTypes = {
  array: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

export default ContactList;
