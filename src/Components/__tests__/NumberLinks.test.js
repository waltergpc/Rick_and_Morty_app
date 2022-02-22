import { render, screen, cleanup } from '@testing-library/react'
import NumberLinks from '../NumberLinks'
import { mockResidents, mockEpisodes } from '../../utils/mockData2'
import { BrowserRouter } from 'react-router-dom'

const MockEpisodesNumberLinks = ({ episodes, residents }) => {
  return (
    <BrowserRouter>
      <NumberLinks episodes={episodes} residents={residents} />
    </BrowserRouter>
  )
}

afterEach(() => cleanup())

test('should render links for episodes', () => {
  render(<MockEpisodesNumberLinks episodes={mockEpisodes} />)
  const numElements = screen.getAllByTestId('num-link')
  expect(numElements[0]).toBeInTheDocument()
  expect(numElements[numElements.length - 1]).toBeInTheDocument()
  expect(numElements.length).toBeGreaterThanOrEqual(mockEpisodes.length)
})

test('should render links for residents', () => {
  render(<MockEpisodesNumberLinks residents={mockResidents} />)
  const numElements = screen.getAllByTestId('num-link')
  expect(numElements[0]).toBeInTheDocument()
  expect(numElements[numElements.length - 1]).toBeInTheDocument()
  expect(numElements.length).toBeGreaterThanOrEqual(mockResidents.length)
})

test('should render empty without residents', () => {
  render(<MockEpisodesNumberLinks residents={[]} />)
  const numDiv = screen.getByTestId('numbers-div')
  expect(numDiv).toBeInTheDocument()
  expect(numDiv).toBeVisible()
})
