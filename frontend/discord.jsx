
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

//test


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  //test start
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //test end
  
  ReactDOM.render(<Root store={store}/>, root);
});