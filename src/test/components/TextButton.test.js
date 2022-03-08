import React from 'react';
import { render, screen } from '@testing-library/react';
import TextButton from '../../components/TextButton'

test('renders TextButton component', () => {
  const props = {
    className: "btn u-mt-1-5", type: "submit", text: "JOIN", disabled: false, handleClick: ()=>{} 
  }
  render(<TextButton {...props} />);
  const textButtonElement = screen.getByTestId('TextButtonComponent');
  expect(textButtonElement).toBeInTheDocument();
});
