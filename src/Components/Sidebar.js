import React from 'react'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import styled from 'styled-components'
import { useGlobalContext } from '../Context/GlobalContext'
import logo from '../Images/logo.png'

const Sidebar = () => {
  const { sideBarOpen, setSideBarOpen } = useGlobalContext()

  return (
    <SidebarContainer>
      <aside className={sideBarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
        <div className='sidebar-header'>
          <img className='logo' src={logo} alt='bike-terrain' />
          <button
            className='close-btn'
            type='button'
            onClick={() => setSideBarOpen(false)}
          >
            <FaTimes />
          </button>
        </div>
        <ul className='links'>
          <li>
            <Link to='/' onClick={() => setSideBarOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to='/characters' onClick={() => setSideBarOpen(false)}>
              Characters
            </Link>
          </li>
          <li>
            <Link to='/locations' onClick={() => setSideBarOpen(false)}>
              Locations
            </Link>
          </li>
          <li>
            <Link to='/episodes' onClick={() => setSideBarOpen(false)}>
              Episodes
            </Link>
          </li>
        </ul>
      </aside>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: beige;
    transition: var(--transition);
    cursor: pointer;
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: rgb(194, 233, 16);
  }
  .logo {
    justify-self: center;
    height: 60px;
    border-radius: 50%;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: beige;
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }
  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
    background-color: rgb(47, 47, 46);
    color: beige;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`

export default Sidebar
