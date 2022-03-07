import React from 'react'
import MainGroupView from '../Components/MainGroupView'
import { episodesBaseUrl } from '../utils/helperVariables'

const Episodes = () => {
  return <MainGroupView baseUrl={episodesBaseUrl} />
}

export default Episodes
