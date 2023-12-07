import React from 'react'
import "../styles/Footer.css"
import AnnieTu from '../assets/headshots/AnnieTu.png'
import BriannaPak from '../assets/headshots/BriannaPak.png'
import DaphneHe from '../assets/headshots/DaphneHe.png'
import HannahYi from "../assets/headshots/HannahYi.png"
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
              <a href='https://www.linkedin.com/in/annnie-tu/'>Annie Tu</a>
            </div>

            <div className='team-individual'>
              <img src={BriannaPak} alt='BriannaPak' />
              <a href='https://www.linkedin.com/in/briannapak/'>Brianna Pak</a>
            </div>

            <div className='team-individual'>
              <img src={DaphneHe} alt='DaphneHe' />
              <a href='https://www.linkedin.com/in/daphnehe/'>Daphne He</a>
            </div>

            <div className='team-individual'>
              <img src={HannahYi} alt='Hannah Yi' />
              <a href='https://www.linkedin.com/in/hannah-yi-seattle/'>Hannah Yi</a>
            </div>

            <div className='team-individual'>
              <img src={KaylaTounalom} alt='Kayla Tounalom' />
              <a href='https://www.linkedin.com/in/kayla-tounalom/'>Kayla Tounalom</a>
            </div>

            <div className='team-individual'>
              <img src={KellyWang} alt='Kelly Wang' />
              <a href='https://www.linkedin.com/in/ikellywang/'>Kelly Wang</a>
            </div>

            <div className='team-individual'>
              <img src={LucyLin} alt='Lucy Lin' />
              <a href='https://www.linkedin.com/in/lucy-lin-seattle/'>Lucy Lin</a>
            </div>

            <div className='team-individual'>
              <img src={RoshniSrikanth} alt='Roshni Srikanth' />
              <a href='https://www.linkedin.com/in/roshni-srikanth/'>Roshni Srikanth</a>
            </div>

            <div className='team-individual'>
              <img src={SloaneShea} alt='Sloane Shea' />
              <a href='https://www.linkedin.com/in/sloaneshea/'>Sloane Shea</a>
            </div>

            <div className='team-individual'>
              <img src={MiaPham} alt='MiaPham' />
              <a href='https://www.linkedin.com/in/ph-miapham/'>Mia Pham</a>
            </div>

            <div className='team-individual'>
              <img src={PournamiVarma} alt='Pournami Varma' />
              <a href='https://www.linkedin.com/in/pournamivarma/'>Pournami Varma</a>
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
          <div className='social-media'>
            <a href='https://docs.google.com/spreadsheets/d/1diZua_3eu3zUwGHcwTutxORi5dskz7IZcVvCy0Y8MaQ/edit?usp=sharing'>Team Formation</a>
          </div>
          <div className='social-media'>
            <a href='https://docs.google.com/forms/d/e/1FAIpQLSe8xcGPLcd3TBZ6vl-eCe-YDU5WRSMu1eRkPhF3F7yBsrIg2A/viewform?usp=sf_link'>Resume Submission</a>
          </div>
          <div className='social-media'>
            <a href='https://docs.google.com/forms/d/e/1FAIpQLSfLbZpo4lAO2U6f_7bCT3KlpzGcx2MX_o3g_sz2YQIRDXiVZA/viewform?usp=sf_link'>Project Submission</a>
          </div>
        </div>
      </div>
      <img className="winfo-logo" src={WINFOLogoDark} alt='WINFOLogoDark' />
    </footer>
  )
}

export default Footer