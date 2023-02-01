import React, { useState } from 'react';

export const SimpleForm = ({ onSave, id, btnText, label }) => {
  const [text, setText] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    onSave(text);
    setText('');
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor={id}>{label}</label>
      <div>
        <input
          value={text}
          onChange={event => setText(event.currentTarget.value)}
          id={id}
        />
        <button
          type="button"
          onClick={onSubmit}
        >
          {btnText}
        </button>
      </div>
    </form>
  );
};
