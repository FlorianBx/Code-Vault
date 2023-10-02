import { render, screen } from '@testing-library/react';
import { expect, test, describe } from 'vitest'
import HamburgerMenu from './HamburgerMenu.tsx';

describe('HamburgerMenu', () => {
  test('renders HamburgerMenu component', () => {
    render(<HamburgerMenu handleClick={() => null} />);

    const hamburgerMenu = screen.getByTestId('hamburger-menu-test');
    expect(hamburgerMenu).toBeInTheDocument();
  });
});
