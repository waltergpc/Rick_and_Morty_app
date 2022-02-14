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
      <h5>Search Characters</h5>
      <input
        placeholder='Name'
        type='text'
        name='name'
        value={queryValues.name}
        onChange={handleChange}
      />
      <input
        placeholder='Type'
        type='text'
        name='type'
        value={queryValues.type}
        onChange={handleChange}
      />
      <input
        placeholder='Species'
        type='text'
        name='species'
        value={queryValues.species}
        onChange={handleChange}
      />
      <div>
        <h6>Status</h6>
        <select
          name='status'
          value={queryValues.status}
          onChange={handleChange}
        >
          <option value='all'>All</option>
          <option value='alive'>Alive</option>
          <option value='dead'>Dead</option>
          <option value='unknown'>Unknown</option>
        </select>
      </div>
      <div>
        <h6>Gender</h6>
        <select
          name='gender'
          value={queryValues.gender}
          onChange={handleChange}
        >
          <option value='all'>All</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
          <option value='genderless'>Genderless</option>
          <option value='unknown'>Unknown</option>
        </select>
      </div>
      <button type='submit'>Search</button>
    </form>
  )
}

export default SearchCharacters
