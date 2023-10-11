import { render } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'

import SnippetPage from './SnippetPage.tsx'
import MockCards from './MockCards.tsx'

describe('SnippetPage', () => {
  test('redirects to the view page when the view button is clicked', () => {
    const snippet = {
      id: '123',
      title: 'Mon titre',
      description: 'Ma description',
      tag: 'Mon tag',
      code: 'Mon code',
      createdDate: '2023-10-11T18:49:00Z',
      isPinned: false
    }

    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/snippet/123']}>
        <Routes>
          <Route
            path="/snippet/:id"
            element={<SnippetPage snippet={snippet} />}
          >
            <MockCards snippet={snippet} />
          </Route>
        </Routes>
      </MemoryRouter>
    )

    // Clique sur le bouton view
    const viewButton = getByTestId('view-btn-test')
    viewButton.click()

    // Vérifie que la page est redirigée vers la page view
    expect(window.location.href).toBe('/snippet/123')
  })
})
