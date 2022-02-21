import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import SearchCharacters from '../SearchCharacters'

const mockSetPage = jest.fn()
const mockSetQueryUrl = jest.fn()

afterEach(() => cleanup())

test('should render search bar with disbled search button', () => {
  render(
    <SearchCharacters
      setPage={mockSetPage}
      setQueryUrl={mockSetQueryUrl}
      queryUrl='https://rickandmortyapi.com/api/character/?'
    />
  )
  const searchButton = screen.getByRole('button')
  expect(searchButton).toBeDisabled()
})

test('should change name and enable button', () => {
  render(
    <SearchCharacters
      setPage={mockSetPage}
      setQueryUrl={mockSetQueryUrl}
      queryUrl='https://rickandmortyapi.com/api/character/?'
    />
  )
  const searchButton = screen.getByRole('button')
  const nameInput = screen.getByPlaceholderText('Name')
  expect(nameInput).toBeVisible()
  fireEvent.change(nameInput, { target: { value: 'Summer' } })
  expect(searchButton).toBeEnabled()
})

test('Change all inputs and enable button', () => {
  render(
    <SearchCharacters
      setPage={mockSetPage}
      setQueryUrl={mockSetQueryUrl}
      queryUrl='https://rickandmortyapi.com/api/character/?'
    />
  )
  const searchButton = screen.getByRole('button')
  const nameInput = screen.getByPlaceholderText('Name')
  const typeInput = screen.getByPlaceholderText('Type')
  const speciesInput = screen.getByPlaceholderText('Species')
  const statusSelect = screen.getByTestId('status-input')
  const genderSelect = screen.getByTestId('gender-input')

  fireEvent.change(nameInput, { target: { value: 'Rick' } })
  fireEvent.change(typeInput, { target: { value: 'none' } })
  fireEvent.change(speciesInput, { target: { value: 'human' } })
  fireEvent.change(statusSelect, { target: { value: 'alive' } })
  fireEvent.change(genderSelect, { target: { value: 'female' } })

  expect(nameInput.value).toBe('Rick')
  expect(typeInput.value).toBe('none')
  expect(speciesInput.value).toBe('human')
  expect(statusSelect.value).toBe('alive')
  expect(genderSelect.value).toBe('female')
  expect(searchButton).toBeEnabled()
})
