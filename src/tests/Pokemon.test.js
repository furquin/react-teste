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

describe('teste no componente PokemonDetails', () => {
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
});
