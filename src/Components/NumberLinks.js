import React from 'react'

import { getAfterSlashId } from '../utils/getAfterSlashId'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useFetch } from '../hooks/useFetch'

const NumberLinks = ({ urlsArray, relationshipURL }) => {
  let idsArray = urlsArray.map((url) => getAfterSlashId(url))
  let queryUrl = `${relationshipURL}${idsArray}`

  const { data, loading } = useFetch(queryUrl, 'all')
  console.log(data)

  if (loading) return <pre>...Loading</pre>

  return (
    <Wrapper className='numbers-div'>
      {data.map((element) => {
        const { name, id } = element
        return (
          <Link
            key={id}
            data-testid='num-link'
            className='num-link'
            to={`/episodes/${id}`}
          >
            {name}
          </Link>
        )
      })}
    </Wrapper>
  )
}

export default NumberLinks

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  .num-link {
    margin: 0.3rem;
    color: beige;
    border: 2px black solid;
    border-radius: 0.5rem;
    padding: 0.3rem 0.5rem;
    background-color: rgba(47, 47, 46, 0.9);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    flex-basis: 15%;
    text-align: center;
  }
`
