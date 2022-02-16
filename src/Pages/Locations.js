import React, { useState } from 'react'
import Gridview from '../Components/Gridview'
import GridviewButtons from '../Components/GridviewButtons'
import Pagination from '../Components/Pagination'
import SearchLocations from '../Components/SearchLocations'
import { useFetch } from '../hooks/useFetch'
import background2 from '../Images/background2.png'
import styled from 'styled-components'
import ListView from '../Components/ListView'

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
    <Wrapper>
      {error && <h4>{error}</h4>}
      <SearchLocations setQueryUrl={setQueryUrl} setPage={setPage} />
      <GridviewButtons setGridView={setGridView} gridView={gridView} />
      {gridView ? (
        <Gridview data={data} provider='locations' />
      ) : (
        <ListView data={data} provider='locations' />
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
    </Wrapper>
  )
}

export default Locations

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  background-image: url(${background2});
  object-fit: cover;
  background-size: cover;
  background-repeat: no-repeat;
`
