import React from 'react'

const CharacterCard = ({ character }) => {
  const { name, image, species, status } = character
  return (
    <article>
      <div className='avatar-div'>
        <img src={image} alt={name} />
      </div>
      {name}
      {status}
      {species}
    </article>
  )
}

export default CharacterCard
