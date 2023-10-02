import { BrowserRouter } from 'react-router-dom'
import { test, describe } from 'vitest'
import Navbar from './Navbar.tsx'

describe('Navbar', () => {
  test('renders Navbar component', () => {
    <BrowserRouter>
      render(
      <Navbar />) const hambmenu = screen.getByTestId(/hamburgermenu-test/i)
      expect(hambmenu).toBeInTheDocument()
    </BrowserRouter>
  })

  test('it should show the logo', () => {
    <BrowserRouter>
      render(
      <Navbar />) expect(screen.getByAltText(/Logo/i)).toBeInTheDocument()
    </BrowserRouter>
  })

  test('it should show the menu', () => {
    <BrowserRouter>
      render(
      <Navbar />) expect(screen.getByTestId(/menu/i)).toBeInTheDocument()
    </BrowserRouter>
  })
})
