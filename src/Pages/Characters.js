import React, { useState } from 'react'
import SearchCharacters from '../Components/SearchCharacters'
import { useFetch } from '../hooks/useFetch'

const Characters = () => {
  const [queryUrl, setQueryUrl] = useState(
    'https://rickandmortyapi.com/api/character/?'
  )
  const [page, setPage] = useState(1)
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)

  const { loading, error, data, info } = useFetch(queryUrl, page)

  console.log(data, info)

  if (loading) return <pre>...Loading</pre>

  if (!info) return <pre>...Loading</pre>

  return (
    <section>
      {error && <h4>{error}</h4>}
      <SearchCharacters
        setQueryUrl={setQueryUrl}
        queryUrl={queryUrl}
        setPage={setPage}
      />
      {data.map((character) => {
        return <article key={character.id}>{character.name}</article>
      })}
    </section>
  )
}

export default Characters
