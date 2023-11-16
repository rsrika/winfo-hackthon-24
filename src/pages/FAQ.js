import React from 'react'
import '../styles/FAQ.css'

const FAQ = () => {
  return (
    <>
      <marquee direction="right" scrolldelay="100">
        Welcome to UW WINFO 12th Annual Hackathon – Frequently Asked Questions
      </marquee>
      <h1>FAQs</h1>
      <div className="two-columns">
        <div className='column'>
          <div className='faq-text'>
            <p className='faq-question'>Q: When and where will the Hackathon will take place?</p>
            <p>A: The 2023-2024 WINFO Annual Hackathon will take place on January 27, 2024 at the Husky Union Building (the HUB).</p>
          </div>

          <div className='faq-text'>
            <p className='faq-question'>Q: Do I need to know how to code in order to join the Hackathon?</p>
            <p>A: No, you don't. Although, this year we introduced the Software/AI track, teams can decide whether they want to follow that track. If a team only wants to focus on design or coding, that is totally fine. If a team decides to incorporate both coding and design into their project, they are more than welcome to do so.</p>
          </div>

          <div className='faq-text'>
            <p className='faq-question'>Q: Are there any prerequisites or required skills?</p>
            <p>A: While there are no prerequisites or required skills, it will be an advantage if you have a team where each member has different skills like designing, coding, presentation, etc.</p>
          </div>

          <div className='faq-text'>
            <p className='faq-question'>Q: Is there support available?</p>
            <p>A: There will be mentors from different companies who will go around to give your team feedback and guidance on the project.</p>
          </div>
        </div>

        <div className='column'>
          <div className='faq-text'>
            <p className='faq-question'>Q: How long will the Hackathon be?</p>
            <p>A: The Hackathon is expected to last a whole day (from ~8:30AM to ~9:00PM)</p>
          </div>

          <div className='faq-text'>
            <p className='faq-question'>Q: Can I join remotely?</p>
            <p>A: This year's Hackathon will be fully in-person since we hope everyone will be able to socialize and connect with each other.</p>
          </div>

          <div className='faq-text'>
            <p className='faq-question'>Q: Will there be training prior to the Hackthon day?</p>
            <p>A: There will be no training before the Hackathon day. However, you can find resources on Figma and/or GitHub on the Internet. The WINFO team has also included a guide to
            <a href="https://docs.google.com/document/d/1eipm3RF-BNVUMslS-6EJAuDYzlZsu6DCRy8g1kpv-3s/edit?usp=sharing"> Figma</a> and
            <a href="https://docs.google.com/document/d/1Z_vTHVCCoG6mLnBR52ODxvkz5_nFkf6geejWBxyUdH8/edit?usp=sharing"> GitHub</a> for you to start with.</p>
          </div>

          <div className='faq-text'>
            <p className='faq-question'>Q: What do I need to prepare?</p>
            <p>A: Come with a fully charged laptop, your charger, and a creative mind.</p>
          </div>

          <div className='faq-text'>
            <p className='faq-question'>Q: Will food be provided?</p>
            <p>A: Lunch and dinner will be provided. There will be several food options available, so do not worry if you have dietary restrictions available.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default FAQ