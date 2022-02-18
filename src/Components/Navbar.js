import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../Context/GlobalContext'

const Navbar = () => {
  const { setSideBarOpen } = useGlobalContext()
  return (
    <NavContainer>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <h4>Rick and Morty App</h4>
          </Link>
          <button
            type='button'
            className='nav-toggle'
            onClick={() => setSideBarOpen(true)}
          >
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/characters'>Characters</Link>
          </li>
          <li>
            <Link to='/locations'>Locations</Link>
          </li>
          <li>
            <Link to='/episodes'>Episodes</Link>
          </li>
        </ul>
      </div>
    </NavContainer>
  )
}

export default Navbar

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(47, 47, 46);
  color: beige;
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 150px;
      height: 78px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: beige;
    transition: var(--transition);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-toggle:hover {
    color: rgb(194, 233, 16);
  }
  .nav-links {
    display: none;
  }

  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: beige;
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        transition: all 0.2s linear;
        &:hover {
          border-bottom: 2px solid rgb(194, 233, 16);
          color: rgb(194, 233, 16);
        }
      }
    }
  }
`
