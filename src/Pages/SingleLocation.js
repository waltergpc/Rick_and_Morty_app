import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import useSingleFetch from '../hooks/useSingleFetch'
import NumberLinks from '../Components/NumberLinks'
import background4 from '../Images/background4.png'
import Loading from '../Components/Loading'

const SingleLocation = () => {
  const { id } = useParams()
  let url = `https://rickandmortyapi.com/api/location/${id}`

  const { data, loading, error } = useSingleFetch(url)
  console.log(data, loading, error)

  if (loading) return <Loading />
  if (!data) return <Loading />
  return (
    <Wrapper>
      {error && <div>{error}</div>}
      <div className='main-info'>
        <h4>{data.name}</h4>
        <h4>{data.type}</h4>
        <h4>{data.dimension}</h4>
      </div>
      <div className='residents-div'>
        <h5 className='residents-title'>Residents</h5>
        <div className='residents-code-div'>
          {data.residents && <NumberLinks residents={data.residents} />}
        </div>
      </div>
    </Wrapper>
  )
}

export default SingleLocation

const Wrapper = styled.section`
  padding-top: 2rem;
  display: grid;
  align-items: center;
  gap: 2rem;
  padding: 0.5rem;
  background-image: url(${background4});
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
    height: 80%;
    overflow: scroll;
  }

  .residents-code-div {
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
