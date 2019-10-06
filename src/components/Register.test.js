import React from 'react';
import { fireEvent, render, wait } from '@testing-library/react';
import { useLazyAxios } from 'use-axios-client';
import { navigate } from '@reach/router';
import Register from './Register';

jest.mock('use-axios-client');
jest.mock('@reach/router', () => ({
  navigate: jest.fn(),
}));

test('should login', async () => {
  useLazyAxios.mockReturnValue([
    jest.fn(),
    { data: {}, error: null, loading: false },
  ]);

  const { getByLabelText, getByText } = render(<Register />);

  const usernameInput = getByLabelText(/username:/i);
  const passwordInput = getByLabelText(/password:/i);
  const submitButton = getByText(/submit/i);

  fireEvent.change(usernameInput, { target: { value: 'johnstamos' } });
  fireEvent.change(passwordInput, { target: { value: 'Abcd1234!' } });
  fireEvent.click(submitButton);

  await wait(() => {
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith('/');
  });
});
