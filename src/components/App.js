import React, { useContext, useEffect } from 'react';
import { navigate, Router } from '@reach/router';
import { useAxios } from 'use-axios-client';
import { AuthContext } from '../contexts/Authentication';
import { Chat, Login, NotFound, Register } from '.';

export default function App() {
  const { setUser } = useContext(AuthContext);

  const { data, error, loading } = useAxios('/api/sessions');

  useEffect(() => {
    const { pathname } = window.location;
    if (data) {
      setUser(data);
      navigate(
        pathname === '/login' || pathname === '/register' ? '/' : pathname,
      );
    } else if (error) {
      const path = pathname === '/' ? '/login' : pathname;
      navigate(path);
    }
  }, [data, error, setUser]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Chat path="/" />
      <Login path="/login" />
      <Register path="/register" />
      <NotFound default />
    </Router>
  );
}
