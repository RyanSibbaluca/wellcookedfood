import React from 'react';
import './input.scss';

function Input({label, id}) {
  return (
    <div className="input">
      <div>
        <label for={id}>
          {label}
        </label>
      </div>
      <input id={id} />
    </div>
  );
}

export default Input;