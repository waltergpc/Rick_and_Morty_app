import React from 'react'
import CharacterCard from './CharacterCard'
import LocationsCard from './LocationsCard'

const Gridview = ({ data, provider }) => {
  if (provider === 'characters') {
    return (
      <div>
        {data.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    )
  }
  if (provider === 'locations') {
    return (
      <div>
        {data.map((location) => (
          <LocationsCard location={location} key={location.id} />
        ))}
      </div>
    )
  }
}

export default Gridview
