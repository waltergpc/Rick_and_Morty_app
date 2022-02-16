import React, { useState } from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'

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
      tempUrl = `${tempUrl}&dimension=${queryValues.species}`
    }
    if (queryValues.type) {
      tempUrl = `${tempUrl}&type=${queryValues.type}`
    }
    setQueryUrl(tempUrl)
    setPage(1)
  }
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h5 className='search-title'>Search Locations</h5>
      <input
        className='search-input'
        placeholder='Name'
        type='text'
        name='name'
        value={queryValues.name}
        onChange={handleChange}
      />
      <input
        className='search-input'
        placeholder='Type'
        type='text'
        name='type'
        value={queryValues.type}
        onChange={handleChange}
      />
      <input
        className='search-input'
        placeholder='Dimension'
        type='text'
        name='dimension'
        value={queryValues.dimension}
        onChange={handleChange}
      />
      <button className='search-btn' type='submit'>
        <FaSearch />
      </button>
    </FormWrapper>
  )
}

export default SearchLocations

const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  gap: 0.3rem;
  background-color: rgba(59, 80, 0, 0.86);
  color: beige;
  padding: 1rem;

  .search-title {
    grid-column: 1 / 3;
  }

  .search-input {
    border-radius: 0.3rem;
    padding: 0.2rem;
    width: 85%;
  }

  .search-input:focus {
    outline: none;
  }

  .search-btn {
    padding: 0.5rem;
    background-color: rgba(47, 47, 46, 0.9);
    color: orange;
    border-radius: 0.7rem;
    border: none;
    cursor: pointer;
    transition: var(--transition);
  }

  @media (min-width: 900px) {
    padding: 1rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;

    .search-title {
      grid-column: 1 / 5;
    }

    .search-btn {
      font-size: 1rem;
    }

    .search-btn:hover {
      color: rgba(47, 47, 46, 0.9);
      background-color: orange;
    }
  }
`
