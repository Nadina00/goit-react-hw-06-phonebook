import { combineReducers } from "@reduxjs/toolkit";
import { createReducer } from "@reduxjs/toolkit";
import {addItem, delItem, changeFilter}  from './action';


 const contactsReducer  = createReducer(
  JSON.parse(window.localStorage.getItem('contacts')) ?? [ { id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', phone: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', phone: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', phone: '227-91-26' }],
   {
  [addItem]: (state, action) => [...state, action.payload],
  [delItem]: (state, { payload }) =>
  state.filter(contact => {
        return contact.id !== payload;
  }),
},
   )


 const filterReducer  = createReducer('', {
  [changeFilter]: (state, action) => action.payload
})

export default combineReducers({
  items:contactsReducer,
  filter: filterReducer 
})

