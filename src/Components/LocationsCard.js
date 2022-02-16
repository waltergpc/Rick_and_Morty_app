import React from 'react'
import styled from 'styled-components'

const LocationsCard = ({ location }) => {
  const { name, type, dimension } = location
  return (
    <ArticleWrapper>
      <div>Name: {name}</div>
      <div>Type: {type}</div>
      <div>Dimension: {dimension}</div>
    </ArticleWrapper>
  )
}

export default LocationsCard

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

  @media (min-width: 900px) {
    padding: 1rem;
  }
`
