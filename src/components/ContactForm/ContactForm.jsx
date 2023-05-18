import React from 'react';
import { Formik, Form, Field, useFormik } from 'formik';
import { nanoid } from 'nanoid';
import {
  formStyles,
  inputStyles,
  buttonStyles,
  labelStyles,
  containerStyles,
} from './FormStyles';

export default function ContactForm ({ handleAddContact })  {
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    onSubmit: (values, { resetForm }) => {
      const { name, number } = values;
      handleAddContact(name, number);
      resetForm();
    },
  });

  return (
    <div className={containerStyles}>
      <Formik initialValues={{ name: '', number: '' }} onSubmit={formik.handleSubmit}>
        <Form className={formStyles}>
          <label htmlFor={nameInputId} className={labelStyles}>
            Name
            <Field
              id={nameInputId}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              className={inputStyles}
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </label>
          <label htmlFor={numberInputId} className={labelStyles}>
            Number
            <Field
              id={numberInputId}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              className={inputStyles}
              onChange={formik.handleChange}
              value={formik.values.number}
            />
          </label>
          <button className={buttonStyles} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};