import { render, screen } from '@testing-library/react'
import Navbar from '../Navbar'
import { GlobalProvider } from '../../Context/GlobalContext'
import { BrowserRouter } from 'react-router-dom'

test('should render navbar with 4 links', () => {
  render(
    <GlobalProvider>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </GlobalProvider>
  )
  const pagesLinks = screen.getAllByTestId('nav-link')
  expect(pagesLinks.length).toBeGreaterThanOrEqual(4)
})
