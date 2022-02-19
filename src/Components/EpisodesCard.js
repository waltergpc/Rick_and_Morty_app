import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const EpisodesCard = ({ episode }) => {
  const { id, name, episode: episodeCode, air_date } = episode
  return (
    <ArticleWrapper data-testid='episode-card'>
      <div>
        <Link className='location-link' to={`/episodes/${id}`}>
          {name}
        </Link>
      </div>
      <div>Epsiode Code: {episodeCode}</div>
      <div>Air Date: {air_date}</div>
    </ArticleWrapper>
  )
}

export default EpisodesCard

const ArticleWrapper = styled.article`
  border: 1px solid black;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: rgba(47, 47, 46, 0.9);
  color: beige;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  align-content: center;
  height: fit-content;

  .location-link:visited,
  .location-link:link {
    color: beige;
    text-decoration: underline;
  }

  @media (min-width: 900px) {
    padding: 1rem;
  }
`
