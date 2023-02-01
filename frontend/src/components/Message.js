import React from 'react';
import { useSelector } from 'react-redux';

export const Message = ({ name, message }) => {
  const myName = useSelector(({ data: { name } }) => name);

  return (
    <div className={`message-container ${myName === name ? '' : 'other-message'}`}>
      <span className='user-name'>{name}</span>
      <span className='message'>{message}</span>
    </div>
  );
};
