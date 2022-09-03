import { configureStore } from "@reduxjs/toolkit";
import contactReducer from './redux'

export const store = configureStore({
  reducer: {
  contacts: contactReducer,
  }    
})

   