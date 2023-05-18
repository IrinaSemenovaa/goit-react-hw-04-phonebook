import React from 'react';
import { searchInputStyles, inputContainerStyles } from './SearchInputStyles';

export default function SearchBar({handleFilterChange, filter}) {
  return (
    <div className={inputContainerStyles}>
      <input
        type="text"
        onChange={handleFilterChange}
        value={filter}
        className={searchInputStyles}
      />
    </div>
  );
}
