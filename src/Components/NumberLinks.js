import React from 'react'
import { getAfterSlashId } from '../utils/getAfterSlashId'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NumberLinks = ({ episodes, characters, locations }) => {
  if (episodes) {
    return (
      <Wrapper className='numbers-div'>
        {episodes.map((episode) => {
          const episodeId = getAfterSlashId(episode)
          return (
            <Link
              key={episodeId}
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
