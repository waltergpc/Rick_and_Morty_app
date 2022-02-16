import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import useSingleFetch from '../hooks/useSingleFetch'
import { Link } from 'react-router-dom'
import { getAfterSlashId } from '../utils/getAfterSlashId'

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
        <img src={data.image} alt={data.name} />
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
    </Wrapper>
  )
}

export default SingleCharacter

const Wrapper = styled.section`
  display: grid;
`
