import React from 'react';
import { fireEvent, render, wait } from '@testing-library/react';
import { useLazyAxios } from 'use-axios-client';
import { navigate } from '@reach/router';
import Login from './Login';

jest.mock('use-axios-client');
jest.mock('@reach/router', () => ({
  navigate: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

test('should login', async () => {
  useLazyAxios
    .mockReturnValueOnce([jest.fn(), { loading: false }])
    .mockReturnValueOnce([jest.fn(), { loading: true }])
    .mockReturnValue([jest.fn(), { data: {}, error: null, loading: false }]);

  const { getByLabelText, getByTestId, getByText } = render(<Login />);

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

test('should navigate to register page', async () => {
  useLazyAxios.mockReturnValue([() => {}, { loading: false }]);

  const { getByText } = render(<Login />);

  const registerButton = getByText(/register/i);
  fireEvent.click(registerButton);

  await wait(() => {
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith('/register');
  });
});
