import React from 'react'
import { BsFillGridFill, BsListUl } from 'react-icons/bs'

const GridviewButtons = ({ setGridView }) => {
  return (
    <div>
      <button type='button' onClick={() => setGridView(true)}>
        <BsFillGridFill />
      </button>
      <button type='button' onClick={() => setGridView(false)}>
        <BsListUl />
      </button>
    </div>
  )
}

export default GridviewButtons
