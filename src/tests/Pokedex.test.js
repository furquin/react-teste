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

  test('É exibido proximo pokemon ao clicar no botão próximo pokémon', () => {
    const button = screen.queryByText(/Próximo pokémon/i);
    expect(button).toBeDefined();

    userEvent.click(button);
    const charmander = screen.getByText(/Charmander/i);
    expect(charmander).toBeInTheDocument();

    userEvent.click(button);
    const caterpie = screen.getByText(/Caterpie/i);
    expect(caterpie).toBeDefined();
  });

  test.only('É mostrado apenas um Pokémon por vez.', () => {
    const list = screen.getAllByTestId('pokemon-name');

    expect(list).toHaveLength(1);
  });
});
