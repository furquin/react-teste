import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../services/renderWithRouter';

beforeEach(() => {
  renderWithRouter(<App />);
});

describe('Teste links no componente App.js', () => {
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

  test('Ao clicar no link home e redirecionado pra rota /', () => {
    const { history } = renderWithRouter(<App />);

    const home = screen.getAllByRole('link', { name: 'Home' });

    userEvent.click(home[1]);

    expect(history.location.pathname).toBe('/');
  });

  test('Ao clicar no link About e redirecionado pra rota /about', () => {
    const { history } = renderWithRouter(<App />);

    const About = screen.getAllByRole('link', { name: 'About' });

    userEvent.click(About[1]);

    expect(history.location.pathname).toBe('/about');
  });

  test('Ao clicar no link Favorite Pokémons e redirecionado pra rota /Favorites', () => {
    const { history } = renderWithRouter(<App />);

    const FavoritePokémons = screen.getAllByRole('link', { name: 'Favorite Pokémons' });

    userEvent.click(FavoritePokémons[1]);

    expect(history.location.pathname).toBe('/favorites');
  });
});
