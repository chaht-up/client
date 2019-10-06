import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import NotFound from './NotFound';

test('should have link that navigates to homoe page', () => {
  const { getByText } = render(<NotFound />);

  const notFound = getByText(/not found/i);
  const homeLink = getByText(/home/i);

  expect(notFound).toBeInTheDocument();

  fireEvent.click(homeLink);
  expect(window.location.pathname).toBe('/');
});
