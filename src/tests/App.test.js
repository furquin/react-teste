import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../services/renderWithRouter';

beforeEach(() => {
  renderWithRouter(<App />);
});

describe('Testes no componente App.js', () => {
  test('Aplicação contém o link Home', () => {
    const home = screen.getByRole('link', { name: 'Home' });

    expect(home).toBeDefined();
  });

  test('Aplicação contém o link About', () => {
    const About = screen.getByRole('link', { name: 'About' });

    expect(About).toBeDefined();
  });

  test('Aplicação contém o link Favorite Pokémons', () => {
    const FavoritePokémons = screen.getByRole('link', { name: 'Favorite Pokémons' });

    expect(FavoritePokémons).toBeDefined();
  });
});
