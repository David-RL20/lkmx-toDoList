import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App.js';
import { reducer } from './reducer';
import { state } from './state';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reducer, state);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
