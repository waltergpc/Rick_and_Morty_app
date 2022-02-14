import React, { useState } from 'react'
import Gridview from '../Components/Gridview'
import GridviewButtons from '../Components/GridviewButtons'
import ListView from '../Components/ListView'
import Pagination from '../Components/Pagination'
import SearchCharacters from '../Components/SearchCharacters'
import { useFetch } from '../hooks/useFetch'

const Characters = () => {
  const [queryUrl, setQueryUrl] = useState(
    'https://rickandmortyapi.com/api/character/?'
  )
  const [page, setPage] = useState(1)
  const [gridView, setGridView] = useState(true)
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
      <GridviewButtons setGridView={setGridView} />
      {gridView ? (
        <Gridview data={data} provider='characters' />
      ) : (
        <ListView data={data} provider='characters' />
      )}
      <Pagination
        count={info.count}
        page={page}
        setPage={setPage}
        maxPageNumberLimit={maxPageNumberLimit}
        minPageNumberLimit={minPageNumberLimit}
        setMaxPageNumberLimit={setMaxPageNumberLimit}
        setMinPageNumberLimit={setMinPageNumberLimit}
      />
    </section>
  )
}

export default Characters
