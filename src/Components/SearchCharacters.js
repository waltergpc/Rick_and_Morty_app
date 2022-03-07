import React, { useState } from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { useGlobalContext } from '../Context/GlobalContext'

const SearchCharacters = () => {
  const { setSearchUrl, setSearchValues } = useGlobalContext()
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
    setSearchValues({
      name: queryValues.name,
      type: queryValues.type,
      species: queryValues.species,
      status: queryValues.status !== 'all' ? queryValues.status : '',
      gender: queryValues.gender !== 'all' ? queryValues.gender : '',
    })
    setSearchUrl(tempUrl)
  }
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h5 className='search-title'>Search Characters</h5>
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
        placeholder='Species'
        type='text'
        name='species'
        value={queryValues.species}
        onChange={handleChange}
      />
      <div className='select-div status'>
        <h6 className='select-title'>Status</h6>
        <select
          name='status'
          value={queryValues.status}
          onChange={handleChange}
          className='select-input'
          data-testid='status-input'
        >
          <option value='all'>All</option>
          <option value='alive'>Alive</option>
          <option value='dead'>Dead</option>
          <option value='unknown'>Unknown</option>
        </select>
      </div>
      <div className='select-div gender'>
        <h6 className='select-title'>Gender</h6>
        <select
          name='gender'
          value={queryValues.gender}
          onChange={handleChange}
          className='select-input'
          data-testid='gender-input'
        >
          <option value='all'>All</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
          <option value='genderless'>Genderless</option>
          <option value='unknown'>Unknown</option>
        </select>
      </div>
      <button
        type='submit'
        className='search-btn'
        disabled={
          !queryValues.name &&
          !queryValues.type &&
          !queryValues.species &&
          queryValues.status === 'all' &&
          queryValues.gender === 'all'
        }
      >
        <FaSearch />
      </button>
    </FormWrapper>
  )
}

export default SearchCharacters

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

  @media (max-width: 900px) {
    .search-input {
      grid-column: 1 / 2;
      width: 80%;
    }
    .select-title {
      text-align: center;
    }

    .select-div {
      grid-column: 2 / 3;
    }
    .search-btn {
      grid-column: 2 / 3;
    }
    .status {
      grid-row: 2 / 3;
    }
    .gender {
      grid-row: 3 / 4;
    }
  }

  @media (min-width: 900px) {
    padding: 1rem;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    align-items: center;

    .search-title {
      grid-column: 1 / 7;
    }

    .select-div {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }

    .select-input {
      margin-left: 0.3rem;
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
