import React, { useState } from 'react'

const SearchCharacters = ({ queryUrl, setQueryUrl, setPage }) => {
  const [queryValues, setQueryValues] = useState({
    name: '',
    type: '',
    status: 'all',
    species: '',
    gender: 'all',
  })
  const handleChange = (e) => {
    setQueryValues({ ...queryValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let tempUrl = 'https://rickandmortyapi.com/api/character/?'
    if (queryValues.name) {
      tempUrl = `${tempUrl}name=${queryValues.name}`
    }
    if (queryValues.species) {
      tempUrl = `${tempUrl}&species=${queryValues.species}`
    }
    if (queryValues.status !== 'all') {
      tempUrl = `${tempUrl}&status=${queryValues.status}`
    }
    if (queryValues.gender !== 'all') {
      tempUrl = `${tempUrl}&gender=${queryValues.gender}`
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
        value={queryValues.species}
        onChange={handleChange}
      />
      <select name='status' value={queryValues.status} onChange={handleChange}>
        <option value='all'>All</option>
        <option value='alive'>Alive</option>
        <option value='dead'>Dead</option>
        <option value='unknown'>Unknown</option>
      </select>
      <select name='gender' value={queryValues.gender} onChange={handleChange}>
        <option value='all'>All</option>
        <option value='male'>Male</option>
        <option value='female'>Female</option>
        <option value='genderless'>Genderless</option>
        <option value='unknown'>Unknown</option>
      </select>
      <button type='submit'>Search</button>
    </form>
  )
}

export default SearchCharacters
