import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const EpisodesList = ({ episode }) => {
  const { id, name, episode: episodeCode, air_date } = episode
  return (
    <ArticleWrapper>
      <div className='list-info'>
        <Link to={`/episodes/${id}`}>{name}</Link>
      </div>
      <div className='list-info'>{episodeCode}</div>
      <div className='list-info'>{air_date}</div>
    </ArticleWrapper>
  )
}

export default EpisodesList

const ArticleWrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border: 1px solid black;
  border-radius: 1rem;
  padding: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: rgba(47, 47, 46, 0.9);
  color: beige;
  align-items: center;
  justify-items: center;

  .list-info {
    margin: 0.3rem;
    font-size: 0.6rem;
  }

  .list-info > a {
    color: beige;
    text-decoration: underline;
  }

  @media (min-width: 900px) {
    padding: 1rem;

    .list-info {
      font-size: 1rem;
    }
  }
`
