import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import App from './App';
import Login from './Login';
import Register from './Register';

ReactDOM.render(
  <Router>
    <App exact path="/" />
    <Login path="/login" />
    <Register path="/register" />
  </Router>,
  document.getElementById('root'),
);
