import React from 'react'
import MainGroupView from '../Components/MainGroupView'
import { charactersBaseUrl } from '../utils/helperVariables'

const Characters = () => {
  return <MainGroupView baseUrl={charactersBaseUrl} backgroundImg='bck-1' />
}

export default Characters
