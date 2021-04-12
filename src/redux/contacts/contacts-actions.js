import { createAction } from '@reduxjs/toolkit';

export const fetchContactRequest = createAction('contacts/fetchContactRequest');
export const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
export const fetchContactError = createAction('contacts/fetchContactError');

export const addContactRequest = createAction('contacts/addTodoRequest');
export const addContactSuccess = createAction('contacts/addTodoSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction('contacts/deleteTodoRequest');
export const deleteContactSuccess = createAction('contacts/deleteTodoSuccess');
export const deleteContactError = createAction('contacts/deleteContactError');

export const getFilter = createAction('app/getFilter');
