import { screen, render } from '@testing-library/react';
import { expect, test, describe } from 'vitest'
import EditorPage from './EditorPage.tsx';

describe('EditorPage', () => {
  test('it should have a snippet name label', () => {
    render(<EditorPage />);
    const element = screen.getByText(/Snippet name/i);
    expect(element).toBeInTheDocument();
  });

  test('it should have a snippet name input field', () => {
    render(<EditorPage />);
    const element = screen.getByPlaceholderText(/Enter your snippet name.../i);
    expect(element).toBeInTheDocument();
  });

  test('it should have description label', () => {
    render(<EditorPage />);
    const element = screen.getByText(/Description/i);
    expect(element).toBeInTheDocument();
  });

  test('it should have description input field', () => {
    render(<EditorPage />);
    const element = screen.getByPlaceholderText(/Describe your snippet.../i);
    expect(element).toBeInTheDocument();
  });

  test('it should have code label', () => {
    render(<EditorPage />);
    const element = screen.getByText(/Code/i);
    expect(element).toBeInTheDocument();
  });

  test('it should have code input field', () => {
    render(<EditorPage />);
    const element = screen.getByPlaceholderText(/Paste your code here.../i);
    expect(element).toBeInTheDocument();
  });

  test('it should have submit button', () => {
    render(<EditorPage />);
    const element = screen.getByText(/Submit/i);
    expect(element).toBeInTheDocument();
  });
});
