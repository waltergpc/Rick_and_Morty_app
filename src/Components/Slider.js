import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { slidesInfo } from '../utils/sliderOptions'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Slider = () => {
  const [slides] = useState(slidesInfo)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = slides.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, slides])

  return (
    <Wrapper>
      <div className='center'>
        {slides.map((slide, slideIndex) => {
          const { id, name, description, image, url } = slide
          let position = 'nextSlide'
          if (slideIndex === index) {
            position = 'activeSlide'
          }
          if (
            slideIndex === index - 1 ||
            (index === 0 && slideIndex === slides.length - 1)
          ) {
            position = 'lastSlide'
          }
          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className='slide-img' />
              <h4>
                <Link to={`${url}`}>{name}</Link>
              </h4>
              <p className='description'>{description}</p>
            </article>
          )
        })}
        <button
          type='button'
          className='prev'
          onClick={() => setIndex(index - 1)}
        >
          <FiChevronLeft />
        </button>
        <button
          type='button'
          className='next'
          onClick={() => setIndex(index + 1)}
        >
          <FiChevronRight />
        </button>
      </div>
    </Wrapper>
  )
}

export default Slider

const Wrapper = styled.section`
  padding-bottom: 4rem;
  color: beige;
  .center {
    margin: 0 auto;
    background-color: rgba(47, 47, 46, 0.7);
    border-radius: 1rem;
    margin-top: 3rem;
    width: 80vw;
    height: 380px;
    max-width: 800px;
    text-align: center;
    position: relative;
    display: flex;
    overflow: hidden;
  }
  .slide-img {
    border-radius: 1rem;
    margin-bottom: 1rem;
    width: 200px;
    height: 150px;
    object-fit: cover;
    border: 4px solid var(--clr-grey-8);
    box-shadow: var(--dark-shadow);
  }

  .description {
    color: beige;
  }

  .prev,
  .next {
    position: absolute;
    top: 200px;
    transform: translateY(-50%);
    background: rgb(194, 233, 16);
    color: black;
    width: 1.25rem;
    height: 1.25rem;
    display: grid;
    place-items: center;
    border-color: transparent;
    font-size: 1rem;
    border-radius: var(--radius);
    cursor: pointer;
    transition: var(--transition);
  }
  .prev:hover,
  .next:hover {
    background: black;
    color: rgb(194, 233, 16);
  }
  .prev {
    left: 0;
  }
  .next {
    right: 0;
  }

  article {
    position: absolute;
    color: beige;
    top: 1rem;
    left: 0;
    width: 100%;
    height: 100%;
    transition: var(--transition);
    opacity: 0;
  }

  article.activeSlide {
    opacity: 1;
    transform: translateX(0);
  }
  article.lastSlide {
    transform: translateX(-100%);
  }
  article.nextSlide {
    transform: translateX(100%);
  }

  @media (min-width: 900px) {
    .slide-img {
      height: 200px;
      width: 400px;
    }
  }
`
