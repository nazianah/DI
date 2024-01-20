// src/store/index.js
import { createStore } from "redux";
import { reducer } from "../reducers";

const initialState = { weekday: "Monday" }

export const store = createStore(reducer, initialState);
