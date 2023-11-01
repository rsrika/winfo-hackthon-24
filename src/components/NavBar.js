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
      <ul>
        <li>About Us</li>
        <li>Hackathon Day</li>
        <li>Prize Tracks</li>
        <li>The People</li>
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