import { render, screen } from '@testing-library/react'
import Navbar from '../Navbar'
import { GlobalProvider } from '../../Context/GlobalContext'
import { BrowserRouter } from 'react-router-dom'

const RenderMockNavbar = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </GlobalProvider>
  )
}

test('should render navbar with 4 links', () => {
  render(<RenderMockNavbar />)
  const pagesLinks = screen.getAllByTestId('nav-link')
  expect(pagesLinks.length).toBeGreaterThanOrEqual(4)
})
