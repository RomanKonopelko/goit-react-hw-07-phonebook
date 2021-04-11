import { createAction } from '@reduxjs/toolkit';
import { v4 as randomID } from 'uuid';

export const addContact = createAction('app/addContact', data => ({
  payload: {
    id: randomID(),
    name: data.name,
    number: data.number,
  },
}));
export const deleteContact = createAction('app/deleteContact');
export const getFilter = createAction('app/getFilter');
