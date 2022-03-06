import React from 'react'

const SearchKeywords = React.memo(({ searchValues }) => {
  let savedScreenParams = []
  console.log(searchValues)
  for (const elem in searchValues) {
    if (searchValues[elem].length > 1 && searchValues[elem] !== 'all') {
      savedScreenParams.push(`${elem}: ${searchValues[elem]}`)
    }
  }

  return (
    <div>
      <h6>Searching by:</h6>
      {savedScreenParams.map((param) => (
        <p key={param}>{param}</p>
      ))}
    </div>
  )
})

export default SearchKeywords
