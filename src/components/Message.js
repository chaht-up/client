import React, { useEffect } from "react";

export default function Message({ user, message, getUser }) {
  const { id, senderId, text } =  message;

  useEffect(() => {
    if (!user) getUser(senderId);
  }, [message, user])

  if (user) {
    return <div id={id}>
      {user.username}: {text}
    </div>
  }

  return <div>Loading...</div>
}
