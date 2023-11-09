import React from 'react'
import "../styles/Footer.css"
import AnnieTu from '../assets/headshots/AnnieTu.png'
import HannahYi from "../assets/headshots/HannahYi.png"
import BriannaPak from '../assets/headshots/BriannaPak.png'
import DaphneHe from '../assets/headshots/DaphneHe.png'
import KaylaTounalom from '../assets/headshots/KaylaTounalom.png'
import KellyWang from '../assets/headshots/KellyWang.png'
import LucyLin from '../assets/headshots/LucyLin.png'
import RoshniSrikanth from '../assets/headshots/RoshniSrikanth.png'
import SloaneShea from '../assets/headshots/SloaneShea.png'
import MiaPham from '../assets/headshots/MiaPham.png'
import PournamiVarma from '../assets/headshots/PournamiVarma.png'
import InstagramIcon from '../assets/InstagramIcon.png'
import FacebookIcon from '../assets/FacebookIcon.png'
import EmailIcon from '../assets/EmailIcon.png'
import WebsiteIcon from '../assets/WebsiteIcon.png'
import WINFOLogoDark from '../assets/WINFOLogoDark.png'

const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div className='team'>
          <h1>Team</h1>
          <div className='team-container'>
            <div className='team-individual'>
              <img src={AnnieTu} alt='Annie Tu' />
              <p>Annie Tu</p>
            </div>

            <div className='team-individual'>
              <img src={BriannaPak} alt='BriannaPak' />
              <p>Brianna Pak</p>
            </div>

            <div className='team-individual'>
              <img src={DaphneHe} alt='DaphneHe' />
              <p>Daphne He</p>
            </div>

            <div className='team-individual'>
              <img src={HannahYi} alt='Hannah Yi' />
              <p>Hannah Yi</p>
            </div>

            <div className='team-individual'>
              <img src={KaylaTounalom} alt='Kayla Tounalom' />
              <p>Kayla Tounalom</p>
            </div>

            <div className='team-individual'>
              <img src={KellyWang} alt='Kelly Wang' />
              <p>Kelly Wang</p>
            </div>

            <div className='team-individual'>
              <img src={LucyLin} alt='Lucy Lin' />
              <p>Lucy Lin</p>
            </div>

            <div className='team-individual'>
              <img src={RoshniSrikanth} alt='Roshni Srikanth' />
              <p>Roshni Srikanth</p>
            </div>

            <div className='team-individual'>
              <img src={SloaneShea} alt='Sloane Shea' />
              <p>Sloane Shea</p>
            </div>

            <div className='team-individual'>
              <img src={MiaPham} alt='MiaPham' />
              <p>Mia Pham</p>
            </div>

            <div className='team-individual'>
              <img src={PournamiVarma} alt='Pournami Varma' />
              <p>Pournami Varma</p>
            </div>
          </div>
        </div>

        <div className='stay-connected'>
          <h1>Stay Connected</h1>
          <div className='social-media'>
            <img src={InstagramIcon} alt='Instagram Icon' />
            <a href='https://www.instagram.com/uwwinfo/'>@uwwinfo</a>
          </div>

          <div className='social-media'>
            <img src={FacebookIcon} alt='Facebook Icon' />
            <a href='https://www.facebook.com/groups/461561970560919'>@WINFO FB Group</a>
          </div>

          <div className='social-media'>
            <img src={EmailIcon} alt='Email Icon' />
            <a href='mailto:winfo@uw.edu'>winfo@uw.edu</a>
          </div>

          <div className='social-media'>
            <img src={WebsiteIcon} alt='Website Icon' />
            <a href='https://winfo.ischool.uw.edu/index.html'>Winfo Website</a>
          </div>
        </div>

        <div className='important-links'>
          <h1>Important Links</h1>

        </div>
      </div>
      <img className="winfo-logo" src={WINFOLogoDark} alt='WINFOLogoDark' />
    </footer>
  )
}

export default Footer