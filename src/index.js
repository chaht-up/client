import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import App from './components/App';
import Login from './components/Login';
import Register from './components/Register';

ReactDOM.render(
  <Router>
    <App exact path="/" />
    <Login path="/login" />
    <Register path="/register" />
  </Router>,
  document.getElementById('root'),
);
