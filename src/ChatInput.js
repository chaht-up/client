import React, { useState } from 'react';

export default function ChatInput({ postMessage }) {
  const [input, setInput] = useState('');

  const sendMessage = e => {
    e.preventDefault();
    if (input) {
      postMessage(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={sendMessage}>
      <input
        onChange={event => setInput(event.target.value)}
        placeholder="Message"
        value={input}
      />
      <input type="submit" value="Send" />
    </form>
  );
}
