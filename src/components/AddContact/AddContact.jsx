import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { Button } from '@mui/material';
import css from './AddContact.module.css';
import PropTypes from 'prop-types';

const AddContact = ({ onAddNewContact }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Your name must be more than 3 symbols!')
      .max(50, 'Your name is too long')
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Name may contain only letters'
      )
      .required('Please write your name'),
    phone: Yup.string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      )
      .required('Please write your phone'),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        values.id = nanoid();
        onAddNewContact(values);
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <label htmlFor="name">Name</label>
        <Field className={css.input} id="name" name="name" type="text" />
        <ErrorMessage name="name" component="span" />
        <label htmlFor="phone">Phone</label>
        <Field className={css.input} id="phone" name="phone" type="tel" />
        <ErrorMessage name="phone" component="span" />
        <Button className={css.btn} type="submit" variant="contained">
          Add contact
        </Button>
      </Form>
    </Formik>
  );
};

AddContact.propTypes = {
  onAddNewContact: PropTypes.func,
};

export default AddContact;
