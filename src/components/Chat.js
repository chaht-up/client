import React, { useEffect, useState } from 'react';
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
  const socket = io(`http://localhost:${port}`);

  const getUser = (() => {
    // keep track of in flight requests so we don't bombard the server
    const inFlightRequests = new Set();

    return async (id) => {
      // if we find the user, don't make any requests
      if (users[id]) return users[id];

      // if we find this request is inflight, don't make another request (shitty debounce)
      if (inFlightRequests.has(id)) return;
      // keep track of this for future messages that may be missing the same user
      inFlightRequests.add(id);

      try {
        const response = await fetch(`/api/users/${id}`);
        const user = await response.json();

        // remove initial setting of users in state and add this fake latency to
        // see the messages in a "loading" state
        // await new Promise((resolve) => setTimeout(resolve, 5000))

        // add the user to state when it's found
        setUsers({ ...users, [id]: user });
      } catch (e) {
        // gracefully handle any errors, probably notify user something went horribly wrong
        console.error(e);
      } finally {
        // make sure to clear out id after request completes
        inFlightRequests.delete(id);
      }
    }
  })();

  useEffect(() => {
    socket.emit('app:load', ({ messages: messageData, users: usersData }) => {
      setLoading(true);
      setMessages(messages => [...messages, ...messageData]);
      // setUsers(usersData);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    socket.on('message:new', newMessage => {
      setMessages(messages => [...messages, newMessage]);
    });
  }, []);

  const postMessage = input => {
    socket.emit('message:post', input);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Messages messages={messages} getUser={getUser} users={users} />
      <ChatInput postMessage={postMessage} />
      <Logout />
    </div>
  );
}
