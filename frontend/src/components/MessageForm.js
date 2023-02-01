import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { messageReseived } from '../behaviour/actions';
import { SimpleForm } from './SimpleForm';

const soket = new WebSocket(`ws://${window.location.hostname}:3001`);
console.log(window.location);

export const MessageForm = () => {
  const dispatch = useDispatch();
  const name = useSelector(({ data }) => data.name);
  soket.onmessage = ({ data }) => {
    console.log(data);
    dispatch(messageReseived(JSON.parse(data)));
  };

  const onSave = useCallback(message => {
    soket.send(JSON.stringify({ message, name }));
  }, [name]);

  return (
    <SimpleForm onSave={onSave} id="message" btnText="Send" label="Message" />
  );
};
