import React from 'react'

const CharacterList = ({ character }) => {
  const { name, image, species, status } = character
  return (
    <article>
      awefcasdfcasdfcasdfasdf
      <img src={image} alt={name} />
      <div>{name}</div>
      <div>{species}</div>
      <div>{status}</div>
    </article>
  )
}

export default CharacterList
