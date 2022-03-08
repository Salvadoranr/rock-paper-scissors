import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from '../../components/Text'

test('renders Text component', () => {
  const props = {
    pClass: "text u-mt-1-5",
    pText: "roca",
    pFormatFn: (txt) => txt.toUpperCase(),
    sClass: "text-small",
    sText: "You choose:",
    pFormatFn: (txt) => txt.toUpperCase(),
  }
  render(<Text {...props} />);
  const textElement = screen.getByTestId('TextComponent');
  expect(textElement).toBeInTheDocument();
});
