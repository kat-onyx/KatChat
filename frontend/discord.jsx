
import React from 'react';
import ReactDOM from 'react-dom';

//test
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  //test
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<h1>Welcome to DiscordClone</h1>, root);
});