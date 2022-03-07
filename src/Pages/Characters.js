import React from 'react'
import MainGroupView from '../Components/MainGroupView'
import { charactersBaseUrl } from '../utils/helperVariables'
import background1 from '../Images/background1.png'

const Characters = () => {
  return (
    <MainGroupView baseUrl={charactersBaseUrl} backgroundImg={background1} />
  )
}

export default Characters
