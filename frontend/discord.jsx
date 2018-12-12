
import React from 'react';
import ReactDOM from 'react-dom';

//test
import { login, logout, signup } from './util/session_api_util';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  //test
  window.signup = signup
  window.login = login
  window.logout = logout

  ReactDOM.render(<h1>Welcome to DiscordClone</h1>, root);
});