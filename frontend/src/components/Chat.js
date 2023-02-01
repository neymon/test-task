import React from 'react';
import { Message } from './Message';
import { shallowEqual, useSelector } from 'react-redux';
import { MessageForm } from './MessageForm';
import { Guid } from 'js-guid';

export const Chat = () => {
  const messages = useSelector(({ data }) => data.messages, shallowEqual);

  return (
    <div className='chat'>
      <div className='messages'>
        {messages.map(data => <Message key={Guid.newGuid().toString()} name={data.name} message={data.message} />)}
      </div>
      <MessageForm />
    </div>
  );
};
