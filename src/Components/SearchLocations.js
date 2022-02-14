import React, { useState } from 'react'

const SearchLocations = ({ setQueryUrl, setPage }) => {
  const [queryValues, setQueryValues] = useState({
    name: '',
    type: '',
    dimension: '',
  })
  const handleChange = (e) => {
    setQueryValues({ ...queryValues, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    let tempUrl = 'https://rickandmortyapi.com/api/location/?'
    if (queryValues.name) {
      tempUrl = `${tempUrl}name=${queryValues.name}`
    }
    if (queryValues.dimension) {
      tempUrl = `${tempUrl}&species=${queryValues.species}`
    }
    if (queryValues.type) {
      tempUrl = `${tempUrl}&type=${queryValues.type}`
    }
    setQueryUrl(tempUrl)
    setPage(1)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='name'
        value={queryValues.name}
        onChange={handleChange}
      />
      <input
        type='text'
        name='type'
        value={queryValues.type}
        onChange={handleChange}
      />
      <input
        type='text'
        name='species'
        value={queryValues.dimension}
        onChange={handleChange}
      />
      <button type='submit'>Search</button>
    </form>
  )
}

export default SearchLocations
