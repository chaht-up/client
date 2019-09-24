import React from 'react';

export default function Messages({ messages }) {
  return (
    <div>
      {messages.map(({ id, message }) => (
        <div key={id}>{message}</div>
      ))}
    </div>
  );
}
