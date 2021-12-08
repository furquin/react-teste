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

    expect(heading).toBeInTheDocument();
  });
});
