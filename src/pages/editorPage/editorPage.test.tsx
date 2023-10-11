import { screen, render, fireEvent } from '@testing-library/react'
import { expect, test, describe } from 'vitest'
import { BrowserRouter as Router, useLocation } from 'react-router-dom'
import EditorPage from './EditorPage.tsx'

function LocationDisplay(): React.JSX.Element {
  const location = useLocation()
  return <div data-testid="location-display">{location.pathname}</div>
}

describe('EditorPage', () => {
  describe('EditorPage', () => {
    it('should render correctly', () => {
      const { asFragment } = render(
        <Router>
          <EditorPage />
        </Router>
      )
      expect(asFragment()).toMatchInlineSnapshot(`
        <DocumentFragment>
          <div
            class="flex h-screen justify-center"
          >
            <form
              class="mt-8 flex w-screen flex-col p-4 sm:w-2/3"
            >
              <p
                class="mb-2 text-gray-300"
              >
                Snippet name
              </p>
              <input
                class="h-10 w-2/3 rounded-md bg-gray-800 p-2 text-white focus:outline-none"
                name="title"
                placeholder="Enter your snippet name..."
                required=""
                type="text"
              />
              <p
                class="mb-2 mt-4 text-gray-300"
              >
                Description
              </p>
              <textarea
                class="h-32 w-full rounded-md bg-gray-800 p-2 text-white focus:outline-none"
                name="description"
                placeholder="Describe your snippet..."
                required=""
              />
              <p
                class="mb-2 mt-4 text-gray-300"
              >
                Code
              </p>
              <textarea
                class="h-64 w-full rounded-md bg-gray-800 p-2 text-white focus:outline-none"
                name="code"
                placeholder="Paste your code here..."
                required=""
              />
              <div
                class="flex justify-end"
              >
                <button
                  class="mt-4 w-48 transform items-end rounded-md bg-primary-green p-2 shadow-lg transition-transform active:scale-90"
                  role="button"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </DocumentFragment>
      `)
    })
  })

  test('it should change URL after submitting a snippet', async () => {
    render(
      <Router>
        <LocationDisplay />
        <EditorPage />
      </Router>
    )

    const submitButton = screen.getByRole('button', { name: /Submit/i })
    fireEvent.click(submitButton)

    const expectedURL = '/'
    const locationDisplay = await screen.findByTestId('location-display')
    expect(locationDisplay.textContent).toBe(expectedURL)
  })
})
