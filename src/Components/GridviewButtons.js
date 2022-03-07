import React from 'react'
import { BsFillGridFill, BsListUl } from 'react-icons/bs'
import styled from 'styled-components'
import { useGlobalContext } from '../Context/GlobalContext'

const GridviewButtons = () => {
  const { gridView, setGridView } = useGlobalContext()

  return (
    <Wrapper>
      <button
        type='button'
        className={gridView ? 'grid-btn active' : 'grid-btn'}
        onClick={() => setGridView(true)}
      >
        <BsFillGridFill />
      </button>
      <button
        type='button'
        className={!gridView ? 'grid-btn active' : 'grid-btn'}
        onClick={() => setGridView(false)}
      >
        <BsListUl />
      </button>
    </Wrapper>
  )
}

export default GridviewButtons

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0.5rem;

  .grid-btn {
    font-size: 1.3rem;
    margin: 0 0.5rem;
    display: flex;
    align-items: center;
    background-color: rgb(47, 47, 46);
    color: beige;
    padding: 0.3rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: var(--transition);
  }

  .active {
    background-color: rgb(142, 96, 9);
  }
`
