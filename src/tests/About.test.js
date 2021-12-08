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
});
