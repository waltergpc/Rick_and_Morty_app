import React from 'react'
import styled from 'styled-components'

const CharacterList = ({ character }) => {
  const { name, image, species, status } = character
  return (
    <ArticleWrapper>
      <img className='avatar' src={image} alt={name} />
      <div className='list-info'>{name}</div>
      <div className='list-info'>{species}</div>
      <div className='list-info mobile-hidden'>{status}</div>
    </ArticleWrapper>
  )
}

export default CharacterList

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

  .avatar {
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
  }

  .list-info {
    margin: 0.3rem;
    font-size: 0.6rem;
  }

  .mobile-hidden {
    display: none;
  }

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 1rem;

    .list-info {
      font-size: 1rem;
    }

    .mobile-hidden {
      display: block;
    }
  }
`
