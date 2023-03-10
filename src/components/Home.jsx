import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import '../styles/home.scss'
import Resume from '../assets/CV-M_Fronczak.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import AvatarDark from '../assets/Avatar-dark.jpg'
import AvatarLight from '../assets/Avatar-light.jpg'

function Home() {
  const {theme} = useContext(ThemeContext);
  return (
    <section className={'home ' + theme} id='home'>
      <div className='content-wrap'>
        <div className='header-container'>
            <h1>Hi, I'm</h1>
            <h1 className='name'><span className='h-span'>Marcel Fronczak</span></h1>
            <p>Junior Frontend Developer</p>
            <div className='cta-buttons'>
            <a target="_blank" rel="noreferrer" href="https://github.com/MarcelFronczak" className="cta cta-gh">
                <div className="cta-gh-items">
                  <p>GitHub</p>
                  <FontAwesomeIcon icon={faGithub}/>
                </div>
              </a>
              <a href={Resume} download='M-Fronczak-CV.pdf' className='cta cta-cv'>
                <div className="cta-cv-items">
                  <p>Resume</p>
                  <FontAwesomeIcon icon={faFileArrowDown} id="file-icon"/>
                </div>
              </a>
            </div>
          </div>
          {theme === 'dark' ? <img src={AvatarDark} alt='profile avatar' /> : <img src={AvatarLight} alt='profile avatar' />}
        </div>
    </section>
  )
}

export default Home
