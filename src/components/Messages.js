import React from 'react';

export default function Messages({ messages, users }) {
  return (
    <div>
      {messages.map(({ id, senderId, text }) => (
        <div key={id}>
          {users[senderId].username}: {text}
        </div>
      ))}
    </div>
  );
}
