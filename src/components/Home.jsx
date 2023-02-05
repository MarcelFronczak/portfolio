import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import '../styles/home.scss'
import resume from '../assets/M-Fronczak-CV.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import AvatarDark from '../assets/Avatar-dark.jpg'
import AvatarLight from '../assets/Avatar-light.jpg'

function Home() {
  const {theme} = useContext(ThemeContext);
  return (
    <section className={'home ' + theme} id='home'>
      <div className='content-wrap'>
        <div className='header-container'>
            <h1>Hi, I'm<br></br><span className='h-span'>Marcel Fronczak</span></h1>
            <p>Junior Frontend Developer</p>
            <div className='gradient-wrap'>
              <a href={resume} download='M-Fronczak-CV.pdf' className='resume-btn'>
                Resume
                <FontAwesomeIcon icon={faFileArrowDown} className='file-icon'/>
              </a>
            </div>
          </div>
          {theme === 'dark' ? <img src={AvatarDark} alt='profile image avatar' /> : <img src={AvatarLight} alt='profile image avatar' />}
        </div>
    </section>
  )
}

export default Home
