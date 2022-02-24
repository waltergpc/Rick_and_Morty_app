import React, { useState } from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'

const SearchEpisodes = ({ setQueryUrl, setPage }) => {
  const [queryValues, setQueryValues] = useState({
    name: '',
    episode: '',
  })
  const handleChange = (e) => {
    setQueryValues({ ...queryValues, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    let tempUrl = 'https://rickandmortyapi.com/api/episode/?'
    if (queryValues.name) {
      tempUrl = `${tempUrl}name=${queryValues.name}`
    }
    if (queryValues.episode) {
      tempUrl = `${tempUrl}&episode=${queryValues.episode}`
    }
    setQueryUrl(tempUrl)
    setPage(1)
  }
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h5 className='search-title'>Search Episodes</h5>
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
        placeholder='Episode Code'
        type='text'
        name='episode'
        value={queryValues.episode}
        onChange={handleChange}
      />
      <button
        className='search-btn'
        type='submit'
        disabled={!queryValues.name && !queryValues.episode}
      >
        <FaSearch />
      </button>
    </FormWrapper>
  )
}

export default SearchEpisodes

const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  gap: 0.3rem;
  background-color: rgba(59, 80, 0, 0.86);
  color: beige;
  padding: 1rem;

  .search-title {
    grid-column: 1 / 4;
  }

  .search-input {
    border-radius: 0.3rem;
    padding: 0.2rem;
    width: 100%;
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

  .search-btn:disabled {
    opacity: 0.7;
  }

  @media (min-width: 900px) {
    padding: 1rem;
    align-items: center;

    .search-title {
      grid-column: 1 / 4;
    }

    .search-input {
      width: 60%;
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
