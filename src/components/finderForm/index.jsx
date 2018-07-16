import React from 'react';
import Input from './input';

function FinderForm() {
  return (
    <div>
      <h1>Find stuff you need</h1>
      <h4>Some description</h4>

      <input label="location" />
      <button>Search</button>
    </div>
  )
}

export default FinderForm;