import { render } from '@testing-library/react';
import React from 'react';
import Display from '../components/Display';

it('displays messages', () => {
  const testMessages = [{ name: 'name1', text: 'text1' }];
  const { getByText } = render(<Display messages={testMessages} />);
  expect(getByText('text1')).toBeInTheDocument();
});
