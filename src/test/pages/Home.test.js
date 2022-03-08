import '../mocks/matchMedia.mock'
import React from 'react';
import { MemoryRouter } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import Home from '../../pages/Home'

test('renders Home component', () => {
  render(<MemoryRouter><Home /></MemoryRouter>);
  const HomeElement = screen.getByTestId('HomePage');
  expect(HomeElement).toBeInTheDocument();
});