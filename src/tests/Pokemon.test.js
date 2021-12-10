import React from 'react';
import { screen } from '@testing-library/react';
import Pokemon from '../components/Pokemon';
import renderWithRouter from './renderWithRouter';
import pokemonDetails from '../data';

beforeEach(() => {
  renderWithRouter(<Pokemon
    pokemon={ pokemonDetails[0] }
    isFavorite
    showDetailsLink
  />);
});

describe('teste no componente Pokemon', () => {
  test('É renderizado card com informações específicos ', () => {
    const name = screen.getByText(/pikachu/i);
    expect(name).toBeDefined();

    const type = screen.getByText(/Electric/i);
    expect(type).toBeDefined();

    const averageWeight = screen.getByTestId(/pokemon-weight/i);
    expect(averageWeight).toBeDefined();

    const url = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    const imagem = screen.getByAltText(/pikachu sprite/i);
    expect(imagem.src).toEqual(url);
  });

  test('teste link details card', () => {
    const detailLink = screen.getByText(/More details/i);
    expect(detailLink).toBeDefined();

    expect(detailLink).toHaveAttribute('href', '/pokemons/25');
  });

  test('existe um ícone de estrela nos Pokémons favoritados', () => {
    const icon = screen.getByAltText(/pikachu is marked as favorite/i);
    expect(icon).toBeDefined();

    const image = screen.getAllByRole('img');
    const src = 'http://localhost/star-icon.svg';
    expect(image[1].src).toEqual(src);
  });
});
