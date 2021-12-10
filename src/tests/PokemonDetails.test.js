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

  test(' mapas contendo as localizações do pokémon', () => {
    const detail = screen.getByRole('link', { name: /more details/i });
    expect(detail).toBeDefined();

    userEvent.click(detail);
    const head = screen.getByRole('heading', { level: 2, name: /Locations of Pikachu/i });
    expect(head).toBeDefined();

    const images = screen.getAllByRole('img');
    const value = 3;
    expect(images).toHaveLength(value);

    const imageOne = screen.getByText(/Kanto Viridian Forest/i);
    expect(imageOne).toBeDefined();

    const imageTwo = screen.getByText(/Kanto Power Plant/i);
    expect(imageTwo).toBeDefined();

    const oneSrc = 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png';
    expect(images[1].src).toEqual(oneSrc);

    const twoSrc = 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png';
    expect(images[2].src).toEqual(twoSrc);

    const imageAlt = screen.getAllByAltText(/Pikachu location/i);
    expect(imageAlt).toHaveLength(2);
  });

  test('usuário pode favoritar um pokémon através da página de detalhes', () => {
    const detail = screen.getByRole('link', { name: /more details/i });
    expect(detail).toBeDefined();

    userEvent.click(detail);
    const checkPokemon = screen.getByRole('checkbox', { name: /Pokémon favoritado?/i });
    expect(checkPokemon).toBeDefined();
    userEvent.click(checkPokemon);

    const star = screen.getByAltText(/Pikachu is marked as favorite/i);
    expect(star).toBeInTheDocument();

    userEvent.click(checkPokemon);

    expect(star).not.toBeInTheDocument();
  });
});
