import React from 'react';
import { render, screen } from '@testing-library/react';
import IconButton from '../../components/IconButton'

test('renders IconButton component', () => {
  const props = { name: 'rock', handleClick: () => { }, disabled: false, icon: 'faHandPaper', className: 'test-class' }
  render(<IconButton {...props} />);
  const iconButtonElement = screen.getByTestId('IconButtonComponent');
  expect(iconButtonElement).toBeInTheDocument();
});
