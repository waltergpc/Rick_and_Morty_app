import React from 'react'
import styled from 'styled-components'

const Loading = () => {
  return (
    <Wrapper className='section section-center'>
      <div className='loading'></div>
    </Wrapper>
  )
}

export default Loading

const Wrapper = styled.div`
  height: 75vh;
`
