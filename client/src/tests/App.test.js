import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/hiii....This is react js in client/i);
  expect(linkElement).toBeInTheDocument();
});
