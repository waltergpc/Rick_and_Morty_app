import React from 'react'
import MainGroupView from '../Components/MainGroupView'
import { locationsBaseUrl } from '../utils/helperVariables'

const Locations = () => {
  return <MainGroupView baseUrl={locationsBaseUrl} backgroundImg='bck-2' />
}

export default Locations
