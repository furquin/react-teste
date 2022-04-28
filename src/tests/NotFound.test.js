import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../components/NotFound';

beforeEach(() => {
  render(<NotFound />);
});
describe('testes no componente NotFound', () => {
  test('contém um heading h2 com o texto Page requested not found 😭', () => {
    const heading = screen.getByRole('heading',
      { level: 2, name: /Page requested not found/i });

    expect(heading).toBeDefined();
  });

  test('Teste se página mostra a imagem', () => {
    const url = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';

    const imagem = screen.queryByAltText(/Pikachu crying/i);

    expect(imagem.src).toBe(url);
  });
});
