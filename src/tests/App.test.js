import { render } from '@testing-library/react';
import React from 'react';
import App from '../components/App';

it('renders without crashing', () => {
  const { getByText } = render(<App />);
  expect(getByText('Chat Time')).toBeInTheDocument();
});
