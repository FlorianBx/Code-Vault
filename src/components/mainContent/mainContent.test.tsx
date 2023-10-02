import { render, screen } from '@testing-library/react';
import { expect, test, describe } from 'vitest'
import MainContent from './MainContent.tsx';

describe('MainContent', () => {
  test('renders MainContent component', () => {
    render(<MainContent />);
    expect(screen.getByText('MainContent')).toBeInTheDocument();
  });
});
