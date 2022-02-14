import React from 'react'

const LocationsCard = ({ location }) => {
  const { name, type, dimension } = location
  return (
    <article>
      {name}
      {type}
      {dimension}
    </article>
  )
}

export default LocationsCard
