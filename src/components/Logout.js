import React, { useContext, useEffect } from 'react';
import { useLazyAxios } from 'use-axios-client';
import { navigate } from '@reach/router';
import { AuthContext } from '../contexts/Authentication';

export default function Logout() {
  const { setUser } = useContext(AuthContext);

  const [logout, { data, error, loading }] = useLazyAxios({
    method: 'DELETE',
    url: '/api/sessions',
    headers: { 'content-type': 'application/json' },
  });

  useEffect(() => {
    if (data) {
      setUser(null);
      navigate('/login');
    }
  }, [data, error, setUser]);

  if (loading) {
    return <div data-testid="loading">Loading...</div>;
  }

  if (error) {
    return <div data-testid="error">Error...{error.message}</div>;
  }

  return (
    <div>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}
