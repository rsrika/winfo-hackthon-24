import React from 'react'
import '../styles/People.css'
import AnnieTu from "../assets/headshots/AnnieTu.png"
import BriannaPak from "../assets/headshots/BriannaPak.png"
import DaphneHe from '../assets/headshots/DaphneHe.png'
import HannahYi from "../assets/headshots/HannahYi.png"
import KaylaTounalom from '../assets/headshots/KaylaTounalom.png'
import KellyWang from '../assets/headshots/KellyWang.png'
import LucyLin from '../assets/headshots/LucyLin.png'
import RoshniSrikanth from '../assets/headshots/RoshniSrikanth.png'
import SloaneShea from '../assets/headshots/SloaneShea.png'
import MiaPham from '../assets/headshots/MiaPham.png'
import PournamiVarma from '../assets/headshots/PournamiVarma.png'

const People = () => {
  return (
    <>
      <section>
        <h1>The People</h1>
        <p>
          This hackathon would not have been possible without the support of many companies, alumni, company representatives, mentors, judges, iSchool faculty, and you! Please see below for these people who have helped make this event happen!
        </p>
      </section>

      <section className='people-mentors'>
        <h2>Mentors</h2>
        {/* <p>Click here to see our wonderful mentors!! (updated as much as possible:))</p> */}
        <p>Mentors coming soon!</p>
      </section>

      <section className='people-judges'>
        <h2>Judges</h2>
        <p>Finalists of each category will present to the following judges. These judges include iSchool faculty and company representatives.</p>
        <p>Judges coming soon!</p>
      </section>

      <section className='people-speakers'>
        <h2>Speakers</h2>
        <p>Speakers coming soon!</p>
      </section>

      <section className='people-team'>
        <h2>WINFO Team</h2>
        <p>Feel free to connect with us via LinkedIn!</p>
        <div className='people-winfo-team-container'>
          <div className='people-winfo-team'>
            <a href='https://www.linkedin.com/in/annnie-tu/'>
              <img
                src={AnnieTu}
                alt='Annie Tu'
              />
              <p className='people-winfo-name'>Annie Tu</p>
              <p className='people-winfo-position'>Director of Finance</p>
            </a>
          </div>

          <div className='people-winfo-team'>
            <a href='https://www.linkedin.com/in/briannapak/'>
              <img
                src={BriannaPak}
                alt='Brianna Pak'
              />
              <p className='people-winfo-name'>Brianna Pak</p>
              <p className='people-winfo-position'>Director of Outreach</p>
            </a>
          </div>

          <div className='people-winfo-team'>
            <a href='https://www.linkedin.com/in/daphnehe/'>
              <img
                src={DaphneHe}
                alt='Daphne He'
              />
              <p className='people-winfo-name'>Daphne He</p>
              <p className='people-winfo-position'>Director of <br/>Public Relations</p>
            </a>
          </div>

          <div className='people-winfo-team'>
            <a href='https://www.linkedin.com/in/hannah-yi-seattle/'>
              <img
                src={HannahYi}
                alt='Hannah Yi'
              />
              <p className='people-winfo-name'>Hannah Yi</p>
              <p className='people-winfo-position'>Director of <br/>Community Efforts</p>
            </a>
          </div>

          <div className='people-winfo-team'>
            <a href='https://www.linkedin.com/in/kayla-tounalom/'>
              <img
                src={KaylaTounalom}
                alt='Kayla Tounalom'
              />
              <p className='people-winfo-name'>Kayla Tounalom</p>
              <p className='people-winfo-position'>Director of Diversity</p>
            </a>
          </div>

          <div className='people-winfo-team'>
            <a href='https://www.linkedin.com/in/ikellywang/'>
              <img
                src={KellyWang}
                alt='Kelly Wang'
              />
              <p className='people-winfo-name'>Kelly Wang</p>
              <p className='people-winfo-position'>Creative Director</p>
            </a>
          </div>

          <div className='people-winfo-team'>
            <a href='https://www.linkedin.com/in/lucy-lin-seattle/'>
              <img
                src={LucyLin}
                alt='Lucy Lin'
              />
              <p className='people-winfo-name'>Lucy Lin</p>
              <p className='people-winfo-position'>Co-President</p>
            </a>
          </div>

          <div className='people-winfo-team'>
            <a href='https://www.linkedin.com/in/roshnisrikanth/'>
              <img
                src={RoshniSrikanth}
                alt='Roshni Srikanth'
              />
              <p className='people-winfo-name'>Roshni Srikanth</p>
              <p className='people-winfo-position'>Co-President</p>
            </a>
          </div>

          <div className='people-winfo-team'>
            <a href='https://www.linkedin.com/in/sloane-shea/'>
              <img
                src={SloaneShea}
                alt='Sloane Shea'
              />
              <p className='people-winfo-name'>Sloane Shea</p>
              <p className='people-winfo-position'>Hackathon Director</p>
            </a>
          </div>

          <div className='people-winfo-team'>
            <a href='https://www.linkedin.com/in/ph-miapham/'>
              <img
                src={MiaPham}
                alt='Mia Pham'
              />
              <p className='people-winfo-name'>Mia Pham</p>
              <p className='people-winfo-position'>Hackathon Committee <br/> (Creative Specialist)</p>
            </a>
          </div>

          <div className='people-winfo-team'>
            <a href='https://www.linkedin.com/in/pournamivarma/'>
              <img
                src={PournamiVarma}
                alt='Pournami Varma'
              />
              <p className='people-winfo-name'>Pournami Varma</p>
              <p className='people-winfo-position'>Hackathon Committee <br/> (Outreach Specialist)</p>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default People