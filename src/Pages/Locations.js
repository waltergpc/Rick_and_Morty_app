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

  return (
    <Wrapper>
      {error && <h4>{error}</h4>}
      <SearchLocations setQueryUrl={setQueryUrl} setPage={setPage} />
      <div className='info-div'>
        <GridviewButtons setGridView={setGridView} gridView={gridView} />
        <div className='count-div'>Total Count: {info.count}</div>
      </div>

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

  .info-div {
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-evenly;
  }

  .count-div {
    text-align: center;
    justify-self: center;
    color: beige;
    background-color: rgba(47, 47, 46, 0.7);
    width: fit-content;
    padding: 0.5rem;
    margin-bottom: 0.3rem;
    border-radius: 2rem;
  }
`
