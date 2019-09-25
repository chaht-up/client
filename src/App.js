import React, { useEffect, useState } from 'react';
import ChatInput from './ChatInput';
import Messages from './Messages';
import io from 'socket.io-client';
import 'dotenv/config';

const port = process.env.REACT_APP_SERVER_PORT;
const socket = io(`http://localhost:${port}`);

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket
      .emit('app:load', messageData => {
        setMessages(messages => [...messages, ...messageData]);
      })
      .on('message:new', newMessage => {
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
