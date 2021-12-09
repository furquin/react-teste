import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('teste componente pokemonDetails', () => {
  beforeEach(() => {
    renderWithRouter(<App />);
  });
  test('Detalhes do Pokémon selecionado são mostradas na tela.', async () => {
    const detail = screen.getByRole('link', { name: /more details/i });
    expect(detail).toBeDefined();

    userEvent.click(detail);
    const pokemonDetail = screen.getByText(/Pikachu Details/i);
    expect(pokemonDetail).toBeDefined();

    const heading = screen.getByRole('heading', { level: 2, name: /Summary/i });
    expect(heading).toBeDefined();

    const paragrafo = screen.getByText(/intelligent Pokémon/i);
    expect(paragrafo).toBeDefined();
  });
});
