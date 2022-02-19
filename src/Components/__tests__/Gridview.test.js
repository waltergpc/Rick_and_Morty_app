import { render, screen, cleanup } from '@testing-library/react'
import Gridview from '../Gridview'
import { BrowserRouter } from 'react-router-dom'
import {
  charactersMockData,
  locationsMockData,
  episodesMockData,
} from '../../utils/MockData'

afterEach(() => cleanup())

const MockGridView = ({ data, provider }) => {
  return (
    <BrowserRouter>
      <Gridview data={data} provider={provider} />
    </BrowserRouter>
  )
}

test('should render characters data', () => {
  render(<MockGridView data={charactersMockData} provider='characters' />)
  const characterElement = screen.queryAllByTestId('character-card')
  expect(characterElement[0]).toBeInTheDocument()
})

test('should render no results matched for characters', () => {
  render(<MockGridView data={[]} provider='characters' />)
  const notMatchedElement = screen.queryByText(/No results matched/i)
  expect(notMatchedElement).toBeVisible()
})

test('should render locations data', () => {
  render(<MockGridView data={locationsMockData} provider='locations' />)
  const locationElement = screen.queryAllByTestId('location-card')
  expect(locationElement[0]).toBeInTheDocument()
})

test('should render no results matched for locations', () => {
  render(<MockGridView data={[]} provider='locations' />)
  const notMatchedElement = screen.queryByText(/No results matched/i)
  expect(notMatchedElement).toBeVisible()
})

test('should render episodes data', () => {
  render(<MockGridView data={episodesMockData} provider='episodes' />)
  const episodeElement = screen.queryAllByTestId('episode-card')
  expect(episodeElement[0]).toBeInTheDocument()
})

test('should render no results matched for episodes', () => {
  render(<MockGridView data={[]} provider='episodes' />)
  const notMatchedElement = screen.queryByText(/No results matched/i)
  expect(notMatchedElement).toBeVisible()
})
