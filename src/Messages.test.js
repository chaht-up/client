import React from 'react';
import { render } from '@testing-library/react';
import Messages from './Messages';

test('should load messages', () => {
  const messages = [
    { id: 1, text: 'hello', createdAt: '"2019-09-25T02:36:23.941Z"' },
    { id: 2, text: 'hi', createdAt: '"2019-09-25T02:36:23.942Z"' },
  ];

  const { getByText } = render(<Messages messages={messages} />);

  expect(getByText(/hello/i)).toBeInTheDocument();
  expect(getByText(/hi/i)).toBeInTheDocument();
});
