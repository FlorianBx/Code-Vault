import { render, screen } from '@testing-library/react'
import { expect, test, describe } from 'vitest'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import SnippetPage from './SnippetPage.tsx'

describe('SnippetPage', () => {
  test('renders SnippetPage component', () => {
    render(
      <MemoryRouter initialEntries={['/snippet/123']}>
        <Routes>
          <Route path='/snippet/:id' element={<SnippetPage />} />
        </Routes>
      </MemoryRouter>
    )
    const snippetPage = screen.getByTestId('snippet-page-test')
    expect(snippetPage).toBeInTheDocument()
  })
})
