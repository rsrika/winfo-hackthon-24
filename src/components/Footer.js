import React from 'react'
import "../styles/Footer.css"
import AnnieTu from '../assets/headshots/AnnieTu.png'
import BriannaPak from '../assets/headshots/BriannaPak.png'
import DaphneHe from '../assets/headshots/DaphneHe.png'
import WINFOLogoDark from '../assets/WINFOLogoDark.png'

const Footer = () => {
  return (
    <footer>
      <div className='team'>
        <h1>Team</h1>
        <div className='team-individual'>
          <img src={AnnieTu} alt='Annie Tu' />
          <p>Annie Tu</p>
        </div>

        <div className='team-individual'>
          <img src={BriannaPak} alt='BriannaPak' />
          <p>BriannaPak</p>
        </div>

        <div className='team-individual'>
          <img src={DaphneHe} alt='DaphneHe' />
          <p>DaphneHe</p>
        </div>
      </div>

      <div className='stay-connected'>
        <h1>Stay Connected</h1>

      </div>

      <div className='important-links'>
        <h1>Important Links</h1>

      </div>
    </footer>
  )
}

export default Footer