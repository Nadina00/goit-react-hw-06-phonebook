import { createAction } from "@reduxjs/toolkit";


export const addItem = createAction("items/add");
export const delItem = createAction("items/del");

export const changeFilter = createAction("filter/change");

