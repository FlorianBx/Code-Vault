import { BrowserRouter as Router } from 'react-router-dom';
import { test, describe } from 'vitest'
import SnippetsPage from './SnippetsPage.tsx';

describe('SnippetsPage', () => {
  test('renders SnippetsPage component', () => {
    <Router>
      render(
      <SnippetsPage />
      ) const element = screen.getByText(/SnippetsPage/i)
      expect(element).toBeInTheDocument()
    </Router>;
  });
});
