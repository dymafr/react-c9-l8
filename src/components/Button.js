import React from 'react';

export default function Button({ text, className, ...props }) {
  return (
    <button
      {...props}
      className={`btn btn-primary ${className ? className : ''}`}
    >
      {text}
    </button>
  );
}
