import React from 'react';

export default function Message({ text, user }) {
  if (text && user) {
    return (
      <div>
        {user.username}: {text}
      </div>
    );
  }

  return <div>Loading...</div>;
}
