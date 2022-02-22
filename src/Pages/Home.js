import React from 'react'
import Slider from '../Components/Slider'
import styled from 'styled-components'
import background8 from '../Images/background8.png'

const Home = () => {
  return (
    <Wrapper>
      <h3 className='home-title'>Welcome to Rick and Morty App!</h3>
      <Slider />
    </Wrapper>
  )
}

export default Home

const Wrapper = styled.section`
  color: beige;
  text-align: center;
  padding-top: 1rem;
  background-image: url(${background8});
  background-size: cover;

  .home-title {
    background-color: rgba(47, 47, 46, 0.8);
    width: fit-content;
    margin: 0 auto;
    padding: 1rem;
    border-radius: 1rem;
  }

  @media (min-height: 751px) {
    height: 75vh;
  }
`
