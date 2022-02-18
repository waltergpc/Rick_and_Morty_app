import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import useSingleFetch from '../hooks/useSingleFetch'
import NumberLinks from '../Components/NumberLinks'
import background6 from '../Images/background6.png'

const SingleEpisode = () => {
  const { id } = useParams()
  let url = `https://rickandmortyapi.com/api/episode/${id}`

  const { data, loading, error } = useSingleFetch(url)
  console.log(data, loading, error)

  if (loading) return <pre>...Loading</pre>
  if (!data) return <pre>...Loading</pre>
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
          {data.characters && <NumberLinks residents={data.characters} />}
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
`
