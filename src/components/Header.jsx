import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
        <header className='d-flex align-items-center justify-content-between'>
          <Link to={'/'} className="nav-link text-light ms-3"><h4 className='ms-5'>LOGO</h4></Link>
          <nav className="navbar navbar-expand-lg me-5">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={'/'} className="nav-link text-light ms-3">HOME</Link>
              </li>
              <li className="nav-item">
                <Link to={'/books'} className="nav-link text-light ms-3">BOOKS</Link>
              </li>
              <li className="nav-item">
                <Link to={'/books'} className="nav-link text-light ms-3">ADD</Link>
              </li>
            </ul>
          </nav>
        </header>
    </>
  )
}

export default Header