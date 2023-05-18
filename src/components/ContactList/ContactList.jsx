import React from 'react';
import {
  listWrapper,
  listStyles,
  itemStyles,
  btnDeleteStyles,
  nameStyles,
  numberStyles,
} from './ListSyles';

export default function ContactList({ contacts, handleDeleteContact }) {
  const handleDelete = id => {
    handleDeleteContact(id);
  };

  return (
    <div className={listWrapper}>
      <ul className={listStyles}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={itemStyles}>
            <span className={nameStyles}>{name}:</span>{' '}
            <span className={numberStyles}>{number}</span>
            <button
              onClick={() => handleDelete(id)}
              type="button"
              className={btnDeleteStyles}
            >
              Delete contact
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
