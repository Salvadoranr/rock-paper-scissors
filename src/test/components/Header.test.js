import React from 'react';
import { MemoryRouter } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import Header from '../../components/Header'

test('renders Header component', () => {
  render(<MemoryRouter><Header name="people" /></MemoryRouter>);
  const headerElement = screen.getByTestId('HeaderComponent');
  expect(headerElement).toBeInTheDocument();
});