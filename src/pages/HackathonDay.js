import React from 'react'
import '../styles/HackathonDay.css'
import FinalLogo from "../assets/FinalLogo.png"
import Sticker from "../assets/Sticker.png"
import Rocket from "../assets/Rocket.png"
import Smoke from "../assets/Smoke.png"
import RocketSmoke from "../assets/RocketSmoke.png"
import Sponsors from "../assets/Sponsors.png"

const HackathonDay = () => {
  return (
    <>
      <section className='hackathon-landing'>
        <img
          src={FinalLogo}
          alt="Infinite Possibilities, Infinite Solutions"
          />
          <div>
            <h1>UW WINFO</h1>
            <h1>12th Annual Hackathon</h1>
            <h2>Hackathon Day Information</h2>
          </div>
      </section>

      <section className='hackathon-our-event'>
        <h2>Our Event</h2>
        <p>
          Women in Informatics is extremely excited to welcome you to our biggest event of the year: <strong>WINFO's 12th Annual WINFO Hackathon!</strong> Every year, we bring together UW students with diverse skill sets to develop solutions that address a wide array of issues while celebrating equity and inclusion in the technology field. The purpose of our hackathon is to provide participants with a fun, safe, beginner-friendly, and collaborative environment in which they can learn new skills, meet with industry professionals from different tech fields, and explore computing. Our goal is that this hackathon experience helps participants build the confidence and skills needed to continue engaging with technology in the future.
        </p>
        <p>
          We are so grateful to all our sponsors, mentors, judges, and volunteers for supporting this event and providing the means to put it on. A special shout out to iAffiliates for their willingness to provide support in paying for the room.
        </p>
        <p>
          *If you have any questions please reach out to us via email at <a href='mailto:winfo@uw.edu'>winfo@uw.edu</a> or visit our help table in the back!
        </p>
      </section>

      <section className='hackathon-theme'>
        <h2>Hackathon Theme</h2>
        <div className='hackathon-theme-para'>
          <div>
            <p>
              Women in Informatics and the iSchool community believe that there are no boundaries to human potential and creativity. We recognize that there are infinite avenues to explore and infinite approaches to overcome challenges. When confronted with challenges, it is important to think outside of the box, push the boundaries of what is known, and embrace the idea the there is always more to discover. With infinite possibilities, there are infinite solutions we can create.
            </p>
            <p>
              Our theme this year is: <span>Infinite Possibilities</span>, <span>Infinite Solutions</span>
            </p>
          </div>
          <img
            src= {Sticker}
            alt="blue rocket, yellow planet, pink galaxy"
          />
        </div>
      </section>

      <section className='hackathon-schedule'>
        <h2>Schedule</h2>
          <div className='hackathon-schedule-container'>
            <div className='hackathon-schedule-container-morning'>
              <div className='hackathon-schedule-content'>
                <p>08:30 AM</p>
                <p>Door open for sponsors</p>
              </div>

              <div className='hackathon-schedule-content'>
                <p>09:00 AM</p>
                <p>Door open for participants</p>
              </div>

              <div className='hackathon-schedule-content'>
                <p>09:30 AM</p>
                <p>Open ceremony begins</p>
              </div>

              <div className='hackathon-schedule-content'>
                <p>10:00 AM</p>
                <p>Hackathon begins</p>
              </div>

              <div className='hackathon-schedule-content'>
                <p>11:30 AM</p>
                <p>Mentor check-in</p>
              </div>
            </div>

            {/* <img
              src={Rocket}
              alt='white rocket'
            /> */}

            <div className='hackathon-schedule-container-evening'>
              <div className='hackathon-schedule-content'>
                <p>01:00 PM</p>
                <p>Lunch</p>
              </div>

              <div className='hackathon-schedule-content'>
                <p>03:00 PM</p>
                <p>Second mentor check-in</p>
              </div>

              <div className='hackathon-schedule-content'>
                <p>05:00 PM</p>
                <p>Dinner</p>
              </div>

              <div className='hackathon-schedule-content'>
                <p>06:30 PM</p>
                <p>Mentor meet up</p>
              </div>

              <div className='hackathon-schedule-content'>
                <p>07:00 PM</p>
                <p>Project submission</p>
              </div>

              <div className='hackathon-schedule-content'>
                <p>07:30 PM</p>
                <p>Finalists are announced</p>
              </div>

              <div className='hackathon-schedule-content'>
                <p>07:40 PM</p>
                <p>Final round begins</p>
              </div>

              <div className='hackathon-schedule-content'>
                <p>08:15 PM</p>
                <p>Closing ceremony</p>
              </div>
            </div>
          </div>
      </section>

      <section className='hackathon-sponsors'>
        <img
          src={Sponsors}
        />
      </section>
    </>
  )
}

export default HackathonDay