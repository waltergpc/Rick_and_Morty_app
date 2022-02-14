import React from 'react'

const Pagination = ({
  count,
  page,
  setPage,
  maxPageNumberLimit,
  minPageNumberLimit,
  setMaxPageNumberLimit,
  setMinPageNumberLimit,
}) => {
  const pages = []
  for (let i = 1; i <= Math.ceil(count / 20); i++) {
    pages.push(i)
  }
  const handleNextClick = () => {
    setPage(page + 1)
    if (page + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + 5)
      setMinPageNumberLimit(minPageNumberLimit + 5)
    }
  }

  const handlePrevClick = () => {
    setPage(page - 1)
    if ((page - 1) % 5 === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - 5)
      setMinPageNumberLimit(minPageNumberLimit - 5)
    }
  }

  return (
    <div className='page-numbers'>
      <button
        type='button'
        className='page-btn prev-btn'
        onClick={handlePrevClick}
        disabled={page === 1}
      >
        Prev
      </button>
      {minPageNumberLimit > 4 && <button className='page-btn'>...</button>}
      {pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
          return (
            <button
              type='button'
              className={page === number ? 'page-btn active' : 'page-btn'}
              key={number}
              onClick={(e) => setPage(Number(e.target.textContent))}
            >
              {number}
            </button>
          )
        } else {
          return null
        }
      })}
      {pages.length > maxPageNumberLimit && (
        <button className='page-btn'>...</button>
      )}
      <button
        type='button'
        className='page-btn nxt-btn'
        onClick={handleNextClick}
        disabled={page === pages[pages.length - 1] || pages.length < 1}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
