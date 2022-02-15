import React from 'react'
import CharacterCard from './CharacterCard'
import LocationsCard from './LocationsCard'
import styled from 'styled-components'

const Gridview = ({ data, provider }) => {
  if (provider === 'characters') {
    if (data.length < 1) return <h4>No Results matches</h4>
    return (
      <Wrapper>
        {data.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </Wrapper>
    )
  }
  if (provider === 'locations') {
    if (data.length < 1) return <h4>No Results matches</h4>
    return (
      <Wrapper>
        {data.map((location) => (
          <LocationsCard location={location} key={location.id} />
        ))}
      </Wrapper>
    )
  }
}

export default Gridview

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: rgba(47, 47, 46, 0.4);
  border-radius: 0.5rem;
  padding: 2rem;
  gap: 2rem;
  height: 55vh;
  width: 85vw;
  margin: auto;
  overflow: scroll;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
