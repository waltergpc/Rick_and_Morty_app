import React, { useState } from 'react'
import Gridview from '../Components/Gridview'
import GridviewButtons from '../Components/GridviewButtons'
import ListView from '../Components/ListView'
import Pagination from '../Components/Pagination'
import SearchCharacters from '../Components/SearchCharacters'
import { useFetch } from '../hooks/useFetch'
import styled from 'styled-components'
import background1 from '../Images/background1.png'

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
    <Wrapper>
      {error && <h4>{error}</h4>}
      <SearchCharacters
        setQueryUrl={setQueryUrl}
        queryUrl={queryUrl}
        setPage={setPage}
      />
      <GridviewButtons setGridView={setGridView} gridView={gridView} />
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
    </Wrapper>
  )
}

export default Characters

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  background-image: url(${background1});
  object-fit: cover;
  background-size: cover;
  background-repeat: no-repeat;
`
