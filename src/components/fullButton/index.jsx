import React from 'react';
import './index.scss';

function FullButton({children}) {
  return (
    <button className="fullButton">
      {children}
    </button>
  );
}

export default FullButton;