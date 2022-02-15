import React from 'react'
import CharacterList from './CharacterList'
import styled from 'styled-components'
import LocationsList from './LocationsList'

const ListView = ({ provider, data }) => {
  if (provider === 'characters') {
    return (
      <Wrapper>
        <div className='characters-list-heading'>
          <span>Avatar</span>
          <span>Name</span>
          <span>Species</span>
          <span className='mobile-hidden'>Status</span>
        </div>
        <div className='list-body'>
          {data.map((character) => (
            <CharacterList key={character.id} character={character} />
          ))}
        </div>
      </Wrapper>
    )
  }
  if (provider === 'locations') {
    return (
      <Wrapper>
        <div className='locations-list-heading'>
          <span>Name</span>
          <span>Type</span>
          <span>Dimension</span>
        </div>
        <div className='list-body'>
          {data.map((location) => (
            <LocationsList key={location.id} location={location} />
          ))}
        </div>
      </Wrapper>
    )
  }
}

export default ListView

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: rgba(47, 47, 46, 0.4);
  border-radius: 0.5rem;
  padding: 2rem;
  gap: 1rem;
  height: 55vh;
  width: 85vw;
  margin: auto;

  .characters-list-heading {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border: 1px solid black;
    border-radius: 1rem;
    padding: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: rgba(47, 47, 46, 0.9);
    color: beige;
  }

  .locations-list-heading {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border: 1px solid black;
    justify-items: center;
    border-radius: 1rem;
    padding: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: rgba(47, 47, 46, 0.9);
    color: beige;
  }

  .list-body {
    display: grid;
    gap: 0.5rem;
    overflow: scroll;
  }

  .mobile-hidden {
    display: none;
  }

  @media (min-width: 900px) {
    .characters-list-heading {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    .mobile-hidden {
      display: block;
    }
  }
`
