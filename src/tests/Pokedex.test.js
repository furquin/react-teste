import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

beforeEach(() => {
  renderWithRouter(<App />);
});
describe('testes componente pokedex', () => {
  test(' contém um heading h2 com o texto Encountered pokémons', () => {
    const heading = screen.getByRole('heading',
      { level: 2, name: /Encountered pokémons/i });

    expect(heading).toBeInTheDocument();
  });
});
