import React from 'react'
import "../Components/CSS/Header.css"
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <>

      <div className="header-outer">
        <div className="logo">
          <img src='/images/logo.png' />
          <p>JEE CLASSES  <br />MERRUT</p>
        </div>
        <div className="nav-links">
          <ul>
            <NavLink to='/' className={({ isActive }) => `navlinks ${isActive ? "navlinks" : ""}`}>Home</NavLink>
            <li className='dropdown'>
              <NavLink to='/about' className={({ isActive }) => `navlinks ${isActive ? "navlinks" : ""}`}>About</NavLink>
              <ul className='dropdown-menu'>
                <li>
                  <NavLink to='/experts'>Our Experts</NavLink>
                  <NavLink to='/about-us'>About Us</NavLink>
                </li>
              </ul>
            </li>
            <li className='dropdown'>
              <NavLink to='/course' className={({ isActive }) => `navlinks ${isActive ? "navlinks" : ""}`}>Courses
                <span className="dropdown-arrow">⌃</span>

              </NavLink>
              <ul className='dropdown-menu'>
                <li>
                  <NavLink to='/notes'>Notes</NavLink>
                </li>
                <li>
                  <NavLink to='/batches'>Batches</NavLink>
                </li>

              </ul>
            </li>

            <NavLink to='/contact' className={({ isActive }) => `navlinks ${isActive ? " navl" : ""}`}>Contact</NavLink>
          </ul>
        </div>
        <div className="btn">
          <button>Register</button>
        </div>
      </div>

    </>
  )
}

export default Header
