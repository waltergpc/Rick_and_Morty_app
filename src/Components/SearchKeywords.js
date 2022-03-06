import React from 'react'
import styled from 'styled-components'

const SearchKeywords = React.memo(({ searchValues }) => {
  let savedScreenParams = []
  console.log(searchValues)
  for (const elem in searchValues) {
    if (searchValues[elem].length > 1 && searchValues[elem] !== 'all') {
      savedScreenParams.push(`${elem}: ${searchValues[elem]}`)
    }
  }

  return (
    <Wrapper>
      <span>Searching by</span>
      {savedScreenParams.map((param) => (
        <span className='search-param' key={param}>
          {param}
        </span>
      ))}
    </Wrapper>
  )
})

export default SearchKeywords

const Wrapper = styled.div`
  background-color: rgba(47, 47, 46, 0.7);
  display: flex;
  justify-content: space-evenly;
  font-size: 0.7rem;
  color: beige;
  align-items: center;
  padding: 0.5rem;
  font-weight: bold;
  flex-wrap: wrap;
  .search-param {
    color: beige;
    margin: 0.2rem;
  }
`
