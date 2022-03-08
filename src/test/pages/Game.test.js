import React from 'react';
import { MemoryRouter } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import Game from '../../pages/Game'
import { LVL1 } from '../../gameLvls'
import { setLocalStorage } from "../../utils/manageLocalStorage";
import mountLocalStorageMock from "../mocks/localStorage.mock";

beforeAll(() => {
  const player = { name: 'people', score: 0 }
  mountLocalStorageMock()
  setLocalStorage('player', [player])
})
test('renders Game component', () => {
  const player = { name: 'people', score: 0 }
  render(<MemoryRouter><Game player={player} options={LVL1} lvl={1} /></MemoryRouter>);
  const GameElement = screen.getByTestId('GamePage');
  expect(GameElement).toBeInTheDocument();
});