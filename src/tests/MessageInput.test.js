import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import MessageInput from '../components/MessageInput';

it('should update the name value', () => {
  const { getByTestId } = render(<MessageInput />);
  const input = getByTestId('inputName');

  fireEvent.change(input, { target: { value: 'test' } });

  expect(input.value).toBe('test');
});

it('should update the message value', () => {
  const { getByTestId } = render(<MessageInput />);
  const input = getByTestId('inputText');

  fireEvent.change(input, { target: { value: 'test' } });

  expect(input.value).toBe('test');
});


