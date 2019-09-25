import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import ChatInput from './ChatInput';

test('should send message on valid input then clear input', () => {
  const postMessage = jest.fn();

  const { getByLabelText, getByText } = render(
    <ChatInput postMessage={postMessage} />,
  );

  const chatInput = getByLabelText('chat-input');
  const sendButton = getByText('Send');

  fireEvent.click(sendButton);
  expect(postMessage.mock.calls.length).toBe(0);

  fireEvent.change(chatInput, { target: { value: 'hello' } });
  fireEvent.click(sendButton);
  expect(postMessage.mock.calls.length).toBe(1);
  expect(chatInput.value).toBe('');
});
