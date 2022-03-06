import React, { useState } from 'react'
import SearchEpisodes from '../Components/SearchEpisodes'
import Gridview from '../Components/Gridview'
import GridviewButtons from '../Components/GridviewButtons'
import ListView from '../Components/ListView'
import Pagination from '../Components/Pagination'
import { useFetch } from '../hooks/useFetch'
import styled from 'styled-components'
import background5 from '../Images/background5.png'
import Loading from '../Components/Loading'
import ResetButton from '../Components/ResetButton'
import SearchKeywords from '../Components/SearchKeywords'

const Episodes = () => {
  const [queryUrl, setQueryUrl] = useState(
    'https://rickandmortyapi.com/api/episode/?'
  )
  const [page, setPage] = useState(1)
  const [gridView, setGridView] = useState(true)
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)
  const [searchValues, setSearchValues] = useState(null)

  const { loading, error, data, info } = useFetch(queryUrl, page)

  if (loading) return <Loading />
  if (!info) return <Loading />

  return (
    <Wrapper>
      {error && <h4>{error}</h4>}
      <SearchEpisodes
        setQueryUrl={setQueryUrl}
        queryUrl={queryUrl}
        setPage={setPage}
        setSearchValues={setSearchValues}
      />
      {searchValues && <SearchKeywords searchValues={searchValues} />}
      <div className='info-div'>
        <GridviewButtons setGridView={setGridView} gridView={gridView} />
        <div className='count-div'>Total Count: {info.count}</div>
        <ResetButton
          resetUrl={setQueryUrl}
          originalUrl='https://rickandmortyapi.com/api/episode/?'
          resetSearchValues={setSearchValues}
        />
      </div>
      {gridView ? (
        <Gridview data={data} provider='episodes' />
      ) : (
        <ListView data={data} provider='episodes' />
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

export default Episodes

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  background-image: url(${background5});
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
