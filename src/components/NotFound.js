import React from 'react';
import { Link } from '@reach/router';

export default function NotFound() {
  return (
    <>
      <div>Not Found</div>
      <Link to="/">Home</Link>
    </>
  );
}
