import { screen, render } from '@testing-library/react'
import { expect, test, describe } from 'vitest'
import { BrowserRouter as Router } from 'react-router-dom'
import EditorPage from './EditorPage.tsx'

describe('EditorPage', () => {
  beforeEach(() => {
    render(
      <Router>
        <EditorPage />
      </Router>
    )
  })

  test('it should have a snippet name label', () => {
    const element = screen.getByText(/Snippet name/i)
    expect(element).toBeInTheDocument()
  })

  test('it should have a snippet name input field', () => {
    const element = screen.getByPlaceholderText(/Enter your snippet name.../i)
    expect(element).toBeInTheDocument()
  })

  test('it should have description label', () => {
    const element = screen.getByText(/Description/i)
    expect(element).toBeInTheDocument()
  })

  test('it should have description input field', () => {
    const element = screen.getByPlaceholderText(/Describe your snippet.../i)
    expect(element).toBeInTheDocument()
  })

  test('it should have code label', () => {
    const element = screen.getByText(/Code/i)
    expect(element).toBeInTheDocument()
  })

  test('it should have code input field', () => {
    const element = screen.getByPlaceholderText(/Paste your code here.../i)
    expect(element).toBeInTheDocument()
  })

  test('it should have submit button', () => {
    const element = screen.getByText(/Submit/i)
    expect(element).toBeInTheDocument()
  })
})
