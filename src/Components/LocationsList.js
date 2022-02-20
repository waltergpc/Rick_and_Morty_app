import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LocationsList = ({ location }) => {
  const { id, name, type, dimension } = location
  return (
    <ArticleWrapper data-testid='location-list'>
      <div className='list-info'>
        <Link to={`/locations/${id}`}>{name}</Link>
      </div>
      <div className='list-info'>{type}</div>
      <div className='list-info'>{dimension}</div>
    </ArticleWrapper>
  )
}

export default LocationsList

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
