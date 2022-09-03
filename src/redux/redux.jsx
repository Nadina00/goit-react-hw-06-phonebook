import { combineReducers } from "@reduxjs/toolkit";
import { createReducer } from "@reduxjs/toolkit";
import {addItem, delItem, changeFilter}  from './action';


 const contactsReducer  = createReducer(
  JSON.parse(window.localStorage.getItem('contacts')) ?? [],
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

