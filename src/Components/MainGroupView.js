import React, { useEffect } from 'react'
import Gridview from '../Components/Gridview'
import GridviewButtons from '../Components/GridviewButtons'
import ListView from '../Components/ListView'
import Pagination from '../Components/Pagination'
import SearchCharacters from '../Components/SearchCharacters'
import SearchLocations from '../Components/SearchLocations'
import { useFetch } from '../hooks/useFetch'
import styled from 'styled-components'
import background1 from '../Images/background1.png'
import Loading from '../Components/Loading'
import ResetButton from '../Components/ResetButton'
import SearchKeywords from '../Components/SearchKeywords'
import { useGlobalContext } from '../Context/GlobalContext'
import { charactersBaseUrl, locationsBaseUrl } from '../utils/helperVariables'
import SearchEpisodes from './SearchEpisodes'

const MainGroupView = ({ baseUrl }) => {
  const { gridView, mountInitialSetup, searchValues } = useGlobalContext()

  useEffect(() => {
    mountInitialSetup(baseUrl)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { loading, error, data, info } = useFetch()

  if (loading) return <Loading />

  const getProvider = (baseUrl) => {
    if (baseUrl === charactersBaseUrl) return 'characters'
    if (baseUrl === locationsBaseUrl) return 'locations'
    return 'episodes'
  }

  return (
    <Wrapper>
      {error && <h4>{error}</h4>}
      {baseUrl === charactersBaseUrl ? (
        <SearchCharacters />
      ) : baseUrl === locationsBaseUrl ? (
        <SearchLocations />
      ) : (
        <SearchEpisodes />
      )}
      {searchValues && <SearchKeywords searchValues={searchValues} />}
      <div className='info-div'>
        <GridviewButtons gridView={gridView} />
        <div className='count-div'>Total Count: {info.count}</div>
        <ResetButton originalUrl='https://rickandmortyapi.com/api/character/?' />
      </div>
      {gridView ? (
        <Gridview data={data} provider={getProvider(baseUrl)} />
      ) : (
        <ListView data={data} provider={getProvider(baseUrl)} />
      )}
      <Pagination count={info.count} />
    </Wrapper>
  )
}

export default MainGroupView

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  background-image: url(${background1});
  object-fit: cover;
  background-size: cover;
  background-repeat: no-repeat;

  .info-div {
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .count-div {
    text-align: center;
    justify-self: center;
    color: beige;
    background-color: rgba(47, 47, 46, 0.7);
    width: fit-content;
    padding: 0.3rem;
    font-size: 0.7rem;
    margin-bottom: 0.3rem;
    border-radius: 2rem;
  }

  @media (min-width: 900px) {
    .count-div {
      padding: 0.5rem;
      font-size: 1rem;
    }
  }
`
