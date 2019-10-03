import React from 'react';

export default function Messages({ messages }) {
  return (
    <div>
      {messages.map(({ id, text }) => (
        <div key={id}>{text}</div>
      ))}
    </div>
  );
}
