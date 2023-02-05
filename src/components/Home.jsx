import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import '../styles/home.scss'
import resume from '../assets/M-Fronczak-CV.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'

function Home() {
  const {theme} = useContext(ThemeContext);
  return (
    <section className={theme} id='home'>
      <div>
        <h1>Hi, I'm<br></br><span>Marcel Fronczak</span></h1>
        <p>Junior Frontend Developer</p>
        <div className='gradient-wrap'>
          <a href={resume} download='M-Fronczak-CV.pdf' className='resume-btn'>
            Resume
            <FontAwesomeIcon icon={faFileArrowDown} className='file-icon'/>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home
