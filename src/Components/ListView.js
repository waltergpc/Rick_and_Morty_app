import React from 'react'
import CharacterList from './CharacterList'

const ListView = ({ provider, data }) => {
  if (provider === 'characters') {
    return (
      <div>
        {data.map((character) => (
          <CharacterList key={character.id} character={character} />
        ))}
      </div>
    )
  }
}

export default ListView
