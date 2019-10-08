import React from 'react';
import { fireEvent, render, wait } from '@testing-library/react';
import { useLazyAxios } from 'use-axios-client';
import { navigate } from '@reach/router';
import Register from './Register';

jest.mock('use-axios-client');
jest.mock('@reach/router', () => ({
  navigate: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

test('should register', async () => {
  useLazyAxios
    .mockReturnValueOnce([jest.fn(), { loading: false }])
    .mockReturnValueOnce([jest.fn(), { loading: true }])
    .mockReturnValue([jest.fn(), { data: {}, error: null, loading: false }]);

  const { getByLabelText, getByTestId, getByText } = render(<Register />);

  const usernameInput = getByLabelText(/username:/i);
  const passwordInput = getByLabelText(/password:/i);
  const submitButton = getByText(/submit/i);

  fireEvent.change(usernameInput, { target: { value: 'johnstamos' } });
  fireEvent.change(passwordInput, { target: { value: 'Abcd1234!' } });
  fireEvent.click(submitButton);

  expect(getByTestId('loading')).toBeInTheDocument();

  await wait(() => {
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith('/');
  });
});

test('should navigate to login page', async () => {
  useLazyAxios.mockReturnValue([() => {}, { loading: false }]);

  const { getByText } = render(<Register />);

  const loginButton = getByText(/login/i);
  fireEvent.click(loginButton);

  await wait(() => {
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith('/login');
  });
});
