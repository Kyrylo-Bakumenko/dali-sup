import React, { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [input, setInput] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onSubmit(input);
      setInput('');
    }
  };

  return (
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder="Search"
    />
  );
}

export default SearchBar;
