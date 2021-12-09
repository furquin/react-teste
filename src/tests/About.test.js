import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../components/About';

describe('testes no componente About', () => {
  beforeEach(() => {
    render(<About />);
  });
  test('contém as informações sobre a Pokédex', () => {
    const infOne = screen.getByText(/application/i);
    const infTwo = screen.getByText(/filter/i);

    expect(infOne).toBeDefined();
    expect(infTwo).toBeDefined();
  });

  test('contém um heading h2 com o texto About Pokédex', () => {
    const heading = screen.getByRole('heading', { level: 2, name: /About Pokédex/i });

    expect(heading).toBeDefined();
  });

  test('contém  dois parágrafos com informações sobre a Pokédex', () => {
    const paragrafo = screen.getByText(/Pokémons/i);

    expect(paragrafo).toHaveLength(2);
  });

  test('contém a seguinte imagem de uma Pokédex', () => {
    const url = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';

    const imagem = screen.getByRole('img');

    expect(imagem.src).toEqual(url);
  });
});
