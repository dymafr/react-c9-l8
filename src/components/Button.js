import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

export default function Button({ text, className, ...props }) {
  const theme = useContext(ThemeContext);

  return (
    <button
      {...props}
      className={`btn btn-primary ${className ? className : ''}`}
    >
      {text}
    </button>
  );
}
