import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css'
import WINFOLogoDark from '../assets/WINFOLogoDark.png'

const NavBar = () => {
  return (
    <nav>
      <img
        src={WINFOLogoDark}
        alt='WINFO letter with gradient color pink to purple from left to right.'
      />
      <ul className='nav-bar-links'>
        <li>
          <a href='https://website-winfos-projects.vercel.app/' className="links">
            About
          </a>
        </li>
        <li>
          <NavLink to='/' className="links">
            Hackathon Day
          </NavLink>
        </li>
        <li>
          <NavLink to='/prizetracks' className="links">
            Prize Tracks
          </NavLink>
        </li>
        <li>
          <NavLink to='/thepeople' className="links">
            The People
          </NavLink>
        </li>
        <li>
          <NavLink to='/faqs' className="links">
            FAQs
          </NavLink>
          </li>
      </ul>
    </nav>
  )
}

export default NavBar