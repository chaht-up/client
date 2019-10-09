import React, { useContext } from 'react';
import { Link } from '@reach/router';
import { AuthContext } from '../contexts/Authentication';

export default function NotFound() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div>Not Found</div>
      <Link to={user ? '/' : '/login'}>Home</Link>
    </>
  );
}
