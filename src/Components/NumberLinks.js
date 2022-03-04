import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { getAfterSlashId } from '../utils/getAfterSlashId'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NumberLinks = ({ urlsArray, relationshipURL }) => {
  const [relationshipData, setRelationshipData] = useState([])
  const [loading, setLoading] = useState(false)

  let linkRoute = '/episodes/'
  if (relationshipURL.endsWith('character/')) {
    linkRoute = '/characters/'
  }

  useEffect(() => {
    const fetchRelationshipNames = async () => {
      let idsArray = urlsArray.map((url) => getAfterSlashId(url))
      let queryUrl = `${relationshipURL}${idsArray}`
      setLoading(true)
      try {
        const { data } = await axios.get(queryUrl)
        if (data.length > 1) {
          setRelationshipData([...data])
          setLoading(false)
        } else {
          setRelationshipData([data])
          setLoading(false)
        }
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    fetchRelationshipNames()
  }, [relationshipURL, urlsArray])

  if (loading) return <pre>...Loading</pre>

  if (relationshipData.length < 1) return <h4>No Matches</h4>

  return (
    <Wrapper className='numbers-div'>
      {relationshipData.map((element) => {
        const { name, id } = element
        return (
          <Link
            key={id}
            data-testid='num-link'
            className='num-link'
            to={`${linkRoute}${id}`}
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
