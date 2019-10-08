import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import 'dotenv/config';
import ChatInput from './ChatInput';
import Messages from './Messages';

function App() {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState({});

  const port = process.env.REACT_APP_SERVER_PORT;
  const socket = io(`http://localhost:${port}`);

  useEffect(() => {
    socket.emit('app:load', ({ messages: messageData, users: userData }) => {
      setMessages(messages => [...messages, ...messageData]);
      setUser(userData);
    });
    socket.on('message:new', newMessage => {
      setMessages(messages => [...messages, newMessage]);
    });
  }, []);

  const postMessage = input => {
    socket.emit('message:post', input);
  };

  return (
    <div className="App">
      <Messages messages={messages} />
      <ChatInput postMessage={postMessage} />
    </div>
  );
}

export default App;
