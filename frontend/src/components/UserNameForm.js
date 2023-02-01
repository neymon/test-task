import React, { useCallback } from 'react';
import { SimpleForm } from './SimpleForm';
import { useDispatch, useSelector } from 'react-redux';
import { saveName } from '../behaviour/actions';

export const UserNameForm = () => {
  const dispatch = useDispatch();
  const name = useSelector(({ data: { name } }) => name);
  const onSave = useCallback((name) => {
    dispatch(saveName({ name }));
  }, [dispatch]);

  return (
    <div className='container'>
      {!!name && <span className='user-name'>{'Hello ' + name}</span>}
      <SimpleForm onSave={onSave} id='user-name' btnText="save" label="Yor name" />
    </div>
  );
};
