import React from 'react';
import Message from './Message';

export default function Messages({ messages, users }) {
  return (
    <div>
      {messages.map(({ id, senderId, text }) => {
        const user = users[senderId];
        return <Message key={id} user={user} text={text} />;
      })}
    </div>
  );
}
