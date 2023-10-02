import { render, screen } from '@testing-library/react';
import { expect, test, describe } from 'vitest'
import { BrowserRouter as Router } from 'react-router-dom';
import SnippetPage from './SnippetPage.tsx';

describe('SnippetPage', () => {
  test('renders SnippetPage component', () => {
    render(
      <Router>
        <SnippetPage />
      </Router>,
    );
    const snippetPage = screen.getByTestId('snippet-page-test');
    expect(snippetPage).toBeInTheDocument();
  });
});
