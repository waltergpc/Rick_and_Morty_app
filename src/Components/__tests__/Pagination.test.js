import { render, screen, cleanup } from '@testing-library/react'
import Pagination from '../Pagination'

afterEach(() => cleanup())

test('should render inital pagination component', () => {
  render(
    <Pagination
      count={100}
      page={1}
      maxPageNumberLimit={5}
      minPageNumberLimit={0}
    />
  )
  const paginationElement = screen.getAllByTestId('pages-btns')[0]
  const prevButton = screen.getByTestId('prev-btn')
  const nextButton = screen.getByTestId('next-btn')
  expect(paginationElement).toBeInTheDocument()
  expect(prevButton).toBeDisabled()
  expect(nextButton).toBeEnabled()
})

test('should render last page pagination component', () => {
  render(
    <Pagination
      count={100}
      page={5}
      maxPageNumberLimit={5}
      minPageNumberLimit={0}
    />
  )
  const paginationElement = screen.getAllByTestId('pages-btns')[0]
  const prevButton = screen.getByTestId('prev-btn')
  const nextButton = screen.getByTestId('next-btn')
  expect(paginationElement).toBeInTheDocument()
  expect(prevButton).toBeEnabled()
  expect(nextButton).toBeDisabled()
})

test('should render component without numbers', () => {
  render(
    <Pagination
      count={0}
      page={1}
      maxPageNumberLimit={5}
      minPageNumberLimit={0}
    />
  )
  const paginationElement = screen.queryAllByTestId('pages-btns')
  const prevButton = screen.getByTestId('prev-btn')
  const nextButton = screen.getByTestId('next-btn')
  expect(paginationElement.length).toBeLessThan(1)
  expect(prevButton).toBeDisabled()
  expect(nextButton).toBeDisabled()
})

test('should render component with 5 numbers', () => {
  render(
    <Pagination
      count={500}
      page={1}
      maxPageNumberLimit={5}
      minPageNumberLimit={0}
    />
  )
  const paginationElement = screen.queryAllByTestId('pages-btns')
  expect(paginationElement.length).toBeGreaterThanOrEqual(5)
})
