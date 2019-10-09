import React from 'react';
import io from 'socket.io-client';
import { fireEvent, render } from '@testing-library/react';
import Chat from './Chat';

jest.mock('socket.io-client');

test('should send new message', async () => {
  const existingMessage = 'hello!';
  const newMessage = 'hi!';

  io.mockImplementation(() => ({
    emit: jest.fn().mockImplementation((event, secArg) => {
      if (event === 'app:load') {
        return secArg({
          users: {},
          messages: [
            {
              id: 1,
              text: existingMessage,
              createdAt: '2019-09-25T02:36:23.941Z',
            },
          ],
        });
      }
      if (event === 'message:post') {
        return secArg;
      }
    }),
    on: jest.fn().mockImplementation((event, cb) => {
      if (event === 'message:new') {
        cb({
          id: 2,
          text: newMessage,
          createdAt: '2019-09-25T02:36:23.946Z',
        });
      }
    }),
  }));

  const { getByLabelText, getByText } = render(<Chat />);

  expect(getByText(existingMessage)).toBeInTheDocument();

  const sendButton = getByText(/send/i);
  const chatInput = getByLabelText('chat-input');

  fireEvent.change(chatInput);
  fireEvent.click(sendButton);

  expect(getByText(newMessage)).toBeInTheDocument();
});
