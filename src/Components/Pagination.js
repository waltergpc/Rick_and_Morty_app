import React, { useMemo } from 'react'
import styled from 'styled-components'

const Pagination = React.memo(
  ({
    count,
    page,
    setPage,
    maxPageNumberLimit,
    minPageNumberLimit,
    setMaxPageNumberLimit,
    setMinPageNumberLimit,
  }) => {
    /*const pages = []
  for (let i = 1; i <= Math.ceil(count / 20); i++) {
    pages.push(i)
  }*/

    const getPages = (numOfElements) => {
      let tempPages = []
      for (let i = 1; i <= Math.ceil(numOfElements / 20); i++) {
        tempPages.push(i)
      }
      return tempPages
    }

    const pages = useMemo(() => getPages(count), [count])

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
      <Wrapper>
        <button
          type='button'
          data-testid='prev-btn'
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
                data-testid='pages-btns'
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
          data-testid='next-btn'
          className='page-btn nxt-btn'
          onClick={handleNextClick}
          disabled={page === pages[pages.length - 1] || pages.length < 1}
        >
          Next
        </button>
      </Wrapper>
    )
  }
)

export default Pagination

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  .page-btn {
    padding: 0.3rem;
    margin: 1rem 0;
    cursor: pointer;
    border: 2px;
    background-color: #1c1a1a;
    color: #fff;
  }

  .active {
    background-color: #fff;
    color: #000;
    font-weight: bold;
  }
  /*--------------------- Prev Button CSS--------------------------- */
  .prev-btn {
    border-radius: 2rem 0 0 2rem;
    padding-left: 0.5rem;
  }

  /*--------------------- Next Button CSS--------------------------- */
  .nxt-btn {
    border-radius: 0 2rem 2rem 0;
    padding-right: 0.5rem;
  }

  .prev-btn:disabled,
  .nxt-btn:disabled {
    opacity: 0.7;
  }
`
