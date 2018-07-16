import React from 'react';
import Input from './input';
import FullButton from '../fullButton';
import './index.scss';

function FinderForm() {
  return (
    <div className="finderForm">
      <h1>Find stuff you need</h1>
      <h4>Some description</h4>

      <Input label="Location" id="location"/>
      <FullButton>Search</FullButton>
    </div>
  )
}

export default FinderForm;