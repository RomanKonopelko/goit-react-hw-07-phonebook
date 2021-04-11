import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import * as actions from './contacts-actions';
const filterReducer = createReducer('', {
  [actions.getFilter]: (_, { payload }) => payload,
});

const contactsReducer = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
    const existedContact = state.filter(
      contact => contact.name === payload.name || contact.number === payload.number,
    );
    if (existedContact.length === 0) {
      return [...state, { ...payload }];
    } else {
      alert('this contact or number already exist');
      return state;
    }
  },
  [actions.deleteContact]: (state, { payload }) => state.filter(({ id }) => payload !== id),
});

const contactsAppReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default contactsAppReducer;
