import React from 'react';
import ReactDOM from 'react-dom';
import AuthenticationProvider from './contexts/Authentication';
import { App } from './components';

ReactDOM.render(
  <AuthenticationProvider>
    <App />
  </AuthenticationProvider>,
  document.getElementById('root'),
);
