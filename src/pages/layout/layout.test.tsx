import { BrowserRouter } from 'react-router-dom';
import { expect, test, describe } from 'vitest'
import { render, screen } from '@testing-library/react';

import Layout from './Layout.tsx';

describe('Layout', () => {
  test('it should show the footer', () => {
    render(
      <BrowserRouter>
        <Layout>
          <>
            <div />
            <div />
          </>
        </Layout>
      </BrowserRouter>,
    );
    const footer = screen.getByText(
      '© 2023 Beaumont Florian. All Rights Reserved.',
    );
    expect(footer).toBeInTheDocument();
  });
});
