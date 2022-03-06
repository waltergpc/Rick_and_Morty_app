import React from 'react'
import styled from 'styled-components'

const ResetButton = ({ resetUrl, originalUrl, resetSearchValues }) => {
  const handleClick = (e) => {
    resetUrl(originalUrl)
    resetSearchValues(null)
  }

  return (
    <ButtonWrapper onClick={handleClick} type='button'>
      Reset to All
    </ButtonWrapper>
  )
}

export default ResetButton

const ButtonWrapper = styled.button`
  border-radius: 2rem;
  padding: 0.3rem;
  margin-bottom: 0.3rem;
  background-color: rgba(47, 47, 46, 0.7);
  align-self: middle;
  border: none;
  color: beige;
  font-size: 0.7rem;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    color: rgba(47, 47, 46, 0.9);
    background-color: beige;
  }

  @media (min-width: 900px) {
    font-size: 1rem;
    padding: 0.4rem;
  }
`
