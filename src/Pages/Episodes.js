import React from 'react'
import MainGroupView from '../Components/MainGroupView'
import { episodesBaseUrl } from '../utils/helperVariables'

const Episodes = () => {
  return <MainGroupView baseUrl={episodesBaseUrl} backgroundImg='bck-5' />
}

export default Episodes
