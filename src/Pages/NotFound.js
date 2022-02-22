import React from 'react'
import styled from 'styled-components'
import background8 from '../Images/background8.png'

const NotFound = () => {
  return (
    <Wrapper>
      <h3>404 The resource was not found</h3>
    </Wrapper>
  )
}

export default NotFound

const Wrapper = styled.section`
  background-image: url(${background8});
  background-size: cover;
  height: 80vh;
  color: beige;
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    background-color: rgba(47, 47, 46, 0.7);
    border-radius: 0.5rem;
    padding: 2rem;
  }
`
