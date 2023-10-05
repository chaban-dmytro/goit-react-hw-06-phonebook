import { Button } from '@mui/material';
import React from 'react';
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../../redux/slice';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispath = useDispatch();

  function getFilterContacts() {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  }

  function onDeleteContact(id) {
    dispath(remove(id));
  }

  if (getFilterContacts().length === 0) {
    return;
  } else {
    return (
      <ul className={css.items}>
        {getFilterContacts().map(contact => {
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

export default ContactList;
