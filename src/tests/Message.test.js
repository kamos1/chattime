import { render } from '@testing-library/react';
import React from 'react';
import Message from '../components/Message';

it('creates a message', () => {
  const messageDetails = { name: 'test', text: 'test message' };
  const { getByText } = render(
    <Message name={messageDetails.name} message={messageDetails.text} />
  );

  expect(getByText('test')).toBeInTheDocument();
  expect(getByText('test message')).toBeInTheDocument();
});
