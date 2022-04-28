import React from 'react';
import { render, screen } from '@testing-library/react';
import FavoritePokemons from '../components/FavoritePokemons';
import renderWithRouter from './renderWithRouter';

describe('testes no componente FavoritePokemons', () => {
  test('mensagem No favorite pokemon found caso não tenha favoritos', () => {
    render(<FavoritePokemons />);
    const mensagem = screen.getByText('No favorite pokemon found');

    expect(mensagem).toBeDefined();
  });

  test('Teste se é exibido todos os cards de pokémons favoritados.', () => {
    const pokemonDetail = [
      {
        id: 25,
        image: 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
        moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)',
        name: 'Pikachu',
        type: 'Electric',
        averageWeight: {
          value: '6.0',
          measurementUnit: 'kg',
        },
      }];
    renderWithRouter(<FavoritePokemons pokemons={ pokemonDetail } />);
    const favorite = screen.getByText(/pikachu/i);
    expect(favorite).toBeDefined();
  });
});
