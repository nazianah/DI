import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Counter from './components/Counter';
import counterReducer from './reducers';

const store = createStore(counterReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Counter />
  </Provider>
);