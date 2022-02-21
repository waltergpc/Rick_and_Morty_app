import React from 'react'
import { getAfterSlashId } from '../utils/getAfterSlashId'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NumberLinks = ({ episodes, residents }) => {
  if (episodes) {
    return (
      <Wrapper className='numbers-div'>
        {episodes.map((episode) => {
          const episodeId = getAfterSlashId(episode)
          return (
            <Link
              key={episodeId}
              data-testid='num-link'
              className='num-link'
              to={`/episodes/${episodeId}`}
            >
              {episodeId}
            </Link>
          )
        })}
      </Wrapper>
    )
  }
  // Single Episode and Single locations pages have arrays that map to a character, a single
  // conditional will be used for both with the prop of residents
  if (residents) {
    return (
      <Wrapper className='numbers-div'>
        {residents.map((resident) => {
          const residentId = getAfterSlashId(resident)
          return (
            <Link
              key={residentId}
              className='num-link'
              data-testid='num-link'
              to={`/characters/${residentId}`}
            >
              {residentId}
            </Link>
          )
        })}
      </Wrapper>
    )
  }
}

export default NumberLinks

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  .num-link {
    margin: 0.3rem;
    color: beige;
    border: 2px black solid;
    border-radius: 0.5rem;
    padding: 0.3rem 0.5rem;
    background-color: rgba(47, 47, 46, 0.9);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    flex-basis: 15%;
    text-align: center;
  }
`
