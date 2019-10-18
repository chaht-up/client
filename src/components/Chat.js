import React, { useCallback, useEffect, useState } from 'react';
import io from 'socket.io-client';
import 'dotenv/config';
import ChatInput from './ChatInput';
import Messages from './Messages';
import Logout from './Logout';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(true);

  const port = process.env.REACT_APP_SERVER_PORT;
  const socket = useCallback(io(`http://localhost:${port}`), []);

  useEffect(() => {
    socket.emit('app:load', ({ messages: messageData, users: usersData }) => {
      setLoading(true);
      setMessages(messages => [...messages, ...messageData]);
      setUsers(usersData);
      setLoading(false);
    });

    socket.on('message:new', newMessage => {
      setMessages(messages => [...messages, newMessage]);
    });

    socket.on('user:update', newUser => {
      setUsers(users => ({ ...users, ...newUser }));
    });
  }, [socket]);

  const postMessage = input => {
    socket.emit('message:post', input);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Messages messages={messages} users={users} />
      <ChatInput postMessage={postMessage} />
      <Logout />
    </div>
  );
}
