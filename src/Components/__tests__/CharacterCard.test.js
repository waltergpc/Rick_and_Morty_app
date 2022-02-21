import { render, screen, cleanup } from '@testing-library/react'
import CharacterCard from '../CharacterCard'
import { BrowserRouter } from 'react-router-dom'
import { mockCharacter } from '../../utils/MockData'

const MockCard = ({ character }) => {
  return (
    <BrowserRouter>
      <CharacterCard key={character.id} character={character} />
    </BrowserRouter>
  )
}

afterEach(() => cleanup())

test('should render character card', () => {
  render(<MockCard key={mockCharacter.id} character={mockCharacter} />)
  const cardElement = screen.getByTestId('character-card')
  expect(cardElement).toBeInTheDocument()
})
