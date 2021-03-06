import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import useSingleFetch from '../hooks/useSingleFetch'
import NameLinks from '../Components/NameLinks'
import background6 from '../Images/background6.png'
import Loading from '../Components/Loading'

const SingleEpisode = () => {
  const { id } = useParams()
  let url = `https://rickandmortyapi.com/api/episode/${id}`
  let charactersRelationshipURL = 'https://rickandmortyapi.com/api/character/'

  const { data, loading, error } = useSingleFetch(url)

  if (loading) return <Loading />
  if (!data) return <Loading />
  return (
    <Wrapper>
      {error && <div>{error}</div>}
      <div className='main-info'>
        <h4>Name: {data.name}</h4>
        <h4>Air date: {data.air_date}</h4>
        <h4>Code: {data.episode}</h4>
      </div>
      <div className='residents-div'>
        <h5 className='residents-title'>Characters</h5>
        <div className='numbers-div'>
          {data.characters && (
            <NameLinks
              urlsArray={data.characters}
              relationshipURL={charactersRelationshipURL}
            />
          )}
        </div>
      </div>
    </Wrapper>
  )
}

export default SingleEpisode

const Wrapper = styled.section`
  padding-top: 2rem;
  display: grid;
  align-items: center;
  gap: 2rem;
  padding: 0.5rem;
  background-image: url(${background6});
  background-size: cover;

  .main-info {
    display: grid;
    align-items: center;
    justify-items: center;
    text-align: center;
    gap: 0.5rem;
    background-color: rgba(47, 47, 46, 0.9);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 1rem 0.5rem;
    color: beige;
  }

  .residents-div {
    padding: 0.5rem;
    text-align: center;
    height: 90%;
    overflow: scroll;
  }

  .residents-title {
    background-color: rgba(47, 47, 46, 0.9);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    color: beige;
    padding: 0.3rem;
  }

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
    padding: 5rem 1rem;
    height: 75vh;
  }

  @media (min-height: 751px) {
    height: 75vh;
  }
`
