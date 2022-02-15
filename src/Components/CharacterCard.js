import React from 'react'
import styled from 'styled-components'

const CharacterCard = ({ character }) => {
  const { name, image, species, status } = character
  return (
    <ArticleWrapper>
      <div className='avatar-div'>
        <img className='avatar' src={image} alt={name} />
      </div>
      <div className='info-div'>
        <span className='card-text'>{name}</span>
        <span className='card-text'>{status}</span>
        <span className='card-text'>{species}</span>
      </div>
    </ArticleWrapper>
  )
}

export default CharacterCard

const ArticleWrapper = styled.article`
  border: 1px solid black;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: rgba(47, 47, 46, 0.9);
  color: beige;
  .avatar-div {
    border-radius: 50%;
    display: flex;
    justify-content: center;
  }
  .avatar {
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
  }
  .info-div {
    margin-top: 1rem;
    display: flex;
    text-align: center;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
  }
  .card-text {
    margin: 0.3rem;
    font-weight: bold;
  }

  @media (min-width: 900px) {
    padding: 1rem;
  }
`
