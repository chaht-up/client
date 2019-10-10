import React from 'react';
import Message from './Message';

export default function Messages({ messages, getUser, users }) {
  return messages.map((message) => (
    <Message key={message.id} message={message} getUser={getUser} user={users[message.senderId]} />
  ));
}
