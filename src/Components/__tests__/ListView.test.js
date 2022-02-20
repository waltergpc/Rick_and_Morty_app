import { render, screen, cleanup } from '@testing-library/react'
import ListView from '../ListView'
import { BrowserRouter } from 'react-router-dom'
import {
  charactersMockData,
  locationsMockData,
  episodesMockData,
} from '../../utils/MockData'

afterEach(() => cleanup())

const MockListView = ({ data, provider }) => {
  return (
    <BrowserRouter>
      <ListView data={data} provider={provider} />
    </BrowserRouter>
  )
}

test('should render characters data', () => {
  render(<MockListView data={charactersMockData} provider='characters' />)
  const characterElement = screen.queryAllByTestId('character-list')
  expect(characterElement[0]).toBeInTheDocument()
})

test('should render no results matched for characters', () => {
  render(<MockListView data={[]} provider='characters' />)
  const notMatchedElement = screen.queryByText(/No results matched/i)
  expect(notMatchedElement).toBeVisible()
})

test('should render locations data', () => {
  render(<MockListView data={locationsMockData} provider='locations' />)
  const locationElement = screen.queryAllByTestId('location-list')
  expect(locationElement[0]).toBeInTheDocument()
})

test('should render no results matched for locations', () => {
  render(<MockListView data={[]} provider='locations' />)
  const notMatchedElement = screen.queryByText(/No results matched/i)
  expect(notMatchedElement).toBeVisible()
})

test('should render episodes data', () => {
  render(<MockListView data={episodesMockData} provider='episodes' />)
  const episodeElement = screen.queryAllByTestId('episode-list')
  expect(episodeElement[0]).toBeInTheDocument()
})

test('should render no results matched for episodes', () => {
  render(<MockListView data={[]} provider='episodes' />)
  const notMatchedElement = screen.queryByText(/No results matched/i)
  expect(notMatchedElement).toBeVisible()
})
