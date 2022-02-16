import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import useSingleFetch from '../hooks/useSingleFetch'
import { Link } from 'react-router-dom'
import { getAfterSlashId } from '../utils/getAfterSlashId'
import NumberLinks from '../Components/NumberLinks'
import background3 from '../Images/background3.png'

const SingleCharacter = () => {
  const { id } = useParams()
  let url = `https://rickandmortyapi.com/api/character/${id}`

  const { data, loading, error } = useSingleFetch(url)
  console.log(data)

  if (loading) return <pre>...Loading</pre>
  if (!data) return <pre>...Loading</pre>

  return (
    <Wrapper>
      {error && <div>{error}</div>}
      <div className='main-info'>
        <img className='avatar' src={data.image} alt={data.name} />
        <h4>{data.name}</h4>
        {data.location && (
          <div>
            Location:
            <Link to={`/locations/${getAfterSlashId(data.location.url)}`}>
              {data.location.name}
            </Link>
          </div>
        )}
        {data.origin && (
          <div>
            Origin:
            <Link to={`/locations/${getAfterSlashId(data.origin.url)}`}>
              {data.origin.name}
            </Link>
          </div>
        )}
        <div>Status: {data.status}</div>
        <div>Species: {data.species}</div>
        <div>Gender: {data.gender}</div>
      </div>
      <div className='episodes-div'>
        <h5>Episodes of Appearance</h5>
        {data.episode && <NumberLinks episodes={data.episode} />}
      </div>
    </Wrapper>
  )
}

export default SingleCharacter

const Wrapper = styled.section`
  padding-top: 2rem;
  display: grid;
  align-items: center;
  gap: 2rem;
  padding: 0.5rem;
  background-image: url(${background3});
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

  .main-info > div > a:link,
  a:visited {
    color: rgb(194, 233, 16);
  }

  .avatar {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
  }

  .episodes-div {
    padding: 0.5rem;
    text-align: center;
  }

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
    padding: 5rem 1rem;
  }
`
