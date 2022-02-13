import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch'

const Characters = () => {
  const [queryUrl, setQueryUrl] = useState(
    'https://rickandmortyapi.com/api/character'
  )

  const { loading, error, data, info } = useFetch(queryUrl)

  console.log(data, info, error, loading)

  if (!info) return <pre>...Loading</pre>

  return (
    <div>
      {data.map((character) => {
        return <article key={character.id}>{character.name}</article>
      })}
      <button type='button' onClick={() => setQueryUrl(info.next)}>
        Next
      </button>
    </div>
  )
}

export default Characters
