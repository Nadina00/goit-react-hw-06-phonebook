import {store} from '../redux/store'
import { createAction, createReducer } from "@reduxjs/toolkit";


const ADDCONT = createAction("items/add");
const DELCONT = createAction("items/del");

const itemsChengh = createReducer(0, {
    [ADDCONT]: (state, action) => {return [...state, action.payload]},
    [DELCONT]: (state, action) =>  {return state.filter(data => data.id !== action.payload.id)}},
  );





