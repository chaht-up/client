import React, { useState } from 'react';
import uuidv4 from 'uuid';
import ChatInput from './ChatInput';
import Messages from './Messages';

function App() {
  // TODO: GET messages
  const [messages, setMessages] = useState([
    { id: uuidv4(), message: 'yo' },
    { id: uuidv4(), message: 'hi' },
    { id: uuidv4(), message: 'sup' },
  ]);

  // TODO: POST messages
  const postMessage = input => {
    setMessages([...messages, { id: uuidv4(), message: input }]);
  };

  return (
    <div className="App">
      <Messages messages={messages} />
      <ChatInput postMessage={postMessage} />
    </div>
  );
}

export default App;
