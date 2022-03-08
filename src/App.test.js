import './test/mocks/matchMedia.mock'
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Create new player/i);
  expect(linkElement).toBeInTheDocument();
});
