// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from "./store";

const render = function () {
    ReactDOM.render(<App />, document.getElementById("root"));
}

render();

store.subscribe(render);
