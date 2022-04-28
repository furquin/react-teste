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

    expect(heading).toBeDefined();
  });

  test('É exibido proximo pokemon ao clicar no botão próximo pokémon', () => {
    const button = screen.queryByText(/Próximo pokémon/i);
    expect(button).toBeDefined();

    userEvent.click(button);

    const charmander = screen.getByText(/Charmander/i);
    expect(charmander).toBeDefined();

    userEvent.click(button);
    const caterpie = screen.getByText(/Caterpie/i);
    expect(caterpie).toBeDefined();
  });

  test('É mostrado apenas um Pokémon por vez.', () => {
    const list = screen.getAllByTestId('pokemon-name');

    expect(list).toHaveLength(1);
  });

  test('Teste se a Pokédex tem os botões de filtro.', () => {
    const buttonAll = screen.getByRole('button', { name: /all/i });
    const next = screen.getByTestId('next-pokemon');
    const buttons = screen.getAllByTestId('pokemon-type-button');
    const value = 7;
    expect(buttons).toHaveLength(value);

    const fire = screen.getByRole('button', { name: /fire/i });
    userEvent.click(fire);
    const charmander = screen.getByText(/Charmander/i);
    expect(charmander).toBeDefined();

    userEvent.click(next);
    const rapidash = screen.getByText(/Rapidash/i);
    expect(rapidash).toBeDefined();

    expect(buttonAll).toBeDefined();
  });

  test('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    const next = screen.getByTestId('next-pokemon');
    const buttonAll = screen.getByRole('button', { name: /all/i });
    expect(buttonAll).toBeDefined();

    userEvent.click(buttonAll);
    const pikachu = screen.getByText(/pikachu/i);
    expect(pikachu).toBeDefined();

    userEvent.click(next);
    const charmander = screen.getByText(/charmander/i);
    expect(charmander).toBeDefined();

    userEvent.click(next);
    const caterpie = screen.getByText(/caterpie/i);
    expect(caterpie).toBeDefined();
  });
});
