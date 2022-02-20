import React from 'react'
import styled from 'styled-components'
const Footer = () => {
  console.log(window.innerHeight)
  return (
    <Wrapper>
      <h5>
        &copy; {new Date().getFullYear()}
        <span>Powered By Rick And Mort API, created by WGPC</span>
      </h5>
      <h5>All rights reserved</h5>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  span {
    color: rgb(194, 233, 16);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }

  @media (min-height: 751px) {
    height: 13rem;
  }
`

export default Footer
