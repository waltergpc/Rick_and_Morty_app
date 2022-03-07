import React from 'react'
import CharacterCard from './CharacterCard'
import LocationsCard from './LocationsCard'
import styled from 'styled-components'
import EpisodesCard from './EpisodesCard'

const Gridview = React.memo(({ data, provider }) => {
  if (data.length < 1)
    return <div className='not-found'>No Results matched</div>
  return (
    <Wrapper data-testid='grid-view'>
      {data.map((element) => {
        if (provider === 'characters') {
          return <CharacterCard key={element.id} character={element} />
        }
        if (provider === 'locations') {
          return <LocationsCard key={element.id} location={element} />
        }
        return <EpisodesCard key={element.id} episode={element} />
      })}
    </Wrapper>
  )
})

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
