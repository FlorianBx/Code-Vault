import { screen, render } from '@testing-library/react';
import { expect, test, describe } from 'vitest'
import PageNotFound from './PageNotFound.tsx';

describe('PageNotFound', () => {
  test('renders PageNotFound component', () => {
    render(<PageNotFound />);
    expect(screen.getByText('PageNotFound')).toBeInTheDocument();
  });
});
