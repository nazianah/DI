// src/App.js
import React from 'react';
import Day from './Day';
import { store } from "./store";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Day weekday={store.getState().weekday} />
      </div>
    )
  }
}

export default App;
