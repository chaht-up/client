import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import { App, Login, NotFound, Register } from './components';

ReactDOM.render(
  <Router>
    <App path="/" />
    <Login path="/login" />
    <Register path="/register" />
    <NotFound default />
  </Router>,
  document.getElementById('root'),
);
