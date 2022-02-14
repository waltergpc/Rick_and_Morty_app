import React, { useState } from 'react'
import Gridview from '../Components/Gridview'
import GridviewButtons from '../Components/GridviewButtons'
import Pagination from '../Components/Pagination'
import SearchLocations from '../Components/SearchLocations'
import { useFetch } from '../hooks/useFetch'

const Locations = () => {
  const [queryUrl, setQueryUrl] = useState(
    'https://rickandmortyapi.com/api/location/?'
  )
  const [page, setPage] = useState(1)
  const [gridView, setGridView] = useState(true)
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)

  const { loading, error, data, info } = useFetch(queryUrl, page)

  if (loading) return <pre>...Loading</pre>
  if (!info || !data) return <pre>...Loading</pre>

  console.log(data, info)
  return (
    <section>
      {error && <h4>{error}</h4>}
      <SearchLocations setQueryUrl={setQueryUrl} setPage={setPage} />
      <GridviewButtons setGridView={setGridView} />
      {data.map((location) => {
        return <article key={location.id}>{location.name}</article>
      })}
      {gridView ? <Gridview data={data} provider='locations' /> : <pre>No</pre>}
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

export default Locations
