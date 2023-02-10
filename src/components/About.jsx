import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import '../styles/about.scss'
import AvatarDark from '../assets/Avatar-dark.jpg'
import AvatarLight from '../assets/Avatar-light.jpg'

function About() {
  const {theme} = useContext(ThemeContext);

  return (
    <section id="about" className={'about ' + theme}>
      <h3>ABOUT ME</h3>
      <div className="about-flex-container">
        <div className="col-1-about">
          <p>
          I’m a Computer Science student at Akademia Finansów i Biznesu Vistula in Warsaw. I’m also a passionate of web development - I like to code things from scratch, and enjoy bringing ideas to life in the browser.
          <br />
          <br />
          I focus on my goals and development, that’s why I willingly take up challenges and learn quickly. As a hard-worker and team player, I believe that I can add value to any team. I’m looking for a job as a Junior Frontend Developer in company which will allow me to improve my web development skills.
          </p>
        </div>
        <div className="col-2-about">
          {theme === 'dark' ? <img src={AvatarDark} className='avatar-about' alt="avatar" /> : <img src={AvatarLight} className='avatar-about' alt="avatar" /> }
        </div>
      </div>
    </section>
  )
}

export default About
