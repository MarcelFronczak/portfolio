import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import '../styles/projects.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faSquareJs, faHtml5, faCss3, faSass, faGithub } from '@fortawesome/free-brands-svg-icons'
import { IoLogoFirebase } from "react-icons/io5"
import Project1Dark from '../assets/project-1-dark.png'
import Project1Light from '../assets/project-1-light.png'
import Project2Dark from '../assets/project-2-dark.png'
import Project2Light from '../assets/project-2-light.png'
import Project3Dark from '../assets/project-3-dark.png'
import Project3Light from '../assets/project-3-light.png'

function Projects() {
  const {theme} = useContext(ThemeContext);
  return (
    <section className={'projects ' + theme} id='projects'>
      <h3>PROJECTS</h3>

      <div className='project project-1'>
        <div className="col col1">
          {theme === 'dark' ? <img src={Project1Dark} alt="image of first project" /> : <img src={Project1Light} alt="image of first project" />}
        </div>
        <div className="col col2">

          <h4>JobFinder App</h4>

            <div className='tech-container'>
              <div className='tech-stack-btn'>
                  <div className='tech-stack-content'>
                    <p>React</p>
                    <FontAwesomeIcon icon={faReact} />
                  </div>
              </div>
              <div className='tech-stack-btn'>
                <div className='tech-stack-content'>
                  <p>CSS</p>
                  <FontAwesomeIcon icon={faCss3} />
                </div>
              </div>
              <div className='tech-stack-btn'>
                <div className='tech-stack-content'>
                  <p>Firebase</p>
                  <IoLogoFirebase />
                </div>
              </div>
            </div>

          <div className="description">
            <p className='ul-label'>Functions:</p>
            <ul>
              <li>API to provide job and company listings</li>
              <li>Offers filtering through searchbar</li>
              <li>Offers filtering by experience level</li>
              <li>Firebase Authentication - sign in with Google</li>
              <li>Pagination (previous / next page buttons)</li>
            </ul>
          </div>
          <div className="description">
            <p className='ul-label'>Functions to be added:</p>
            <ul>
              <li>Firebase Realtime Databse to store saved offers</li>
              <li>Category filter</li>
            </ul>
          </div>
          <div className='cta-buttons'>

            <a target='_blank' href="https://marcelfronczak.github.io/job-offers-app/" className='cta-page'>Live Page</a>
            <a target='_blank' href="https://github.com/MarcelFronczak/job-offers-app.git" className='cta-code'>Source Code</a>
          </div>
        </div>
      </div>

      <div className='project project-2'>
        <div className="col col1">
          {theme === 'dark' ? <img src={Project2Dark} alt="image of second project" /> : <img src={Project2Light} alt="image of second project" />}
        </div>
        <div className="col col2">

          <h4>Barbershop Website</h4>

            <div className='tech-container'>
              <div className='tech-stack-btn'>
                  <div className='tech-stack-content'>
                    <p>Javascript</p>
                    <FontAwesomeIcon icon={faSquareJs} />
                  </div>
              </div>
              <div className='tech-stack-btn'>
                <div className='tech-stack-content'>
                  <p>HTML</p>
                  <FontAwesomeIcon icon={faHtml5} />
                </div>
              </div>
              <div className='tech-stack-btn'>
                <div className='tech-stack-content'>
                  <p>CSS</p>
                  <FontAwesomeIcon icon={faCss3} />
                </div>
              </div>
            </div>

          <div className="description">
            <p>Barbershop’s Responsive and Interactive Landing Page.</p>
          </div>
          <div className="description">
            <p>Website is accessible on every device and browser.</p>
          </div>
          <div className='cta-buttons'>

            <a target='_blank' href="https://marcelfronczak.github.io/barbershop-website/" className='cta-page'>Live Page</a>
            <a target='_blank' href="https://github.com/MarcelFronczak/barbershop-website.git" className='cta-code'>Source Code</a>
          </div>
        </div>
      </div>

      <div className='project project-1'>
        <div className="col col1">
          {theme === 'dark' ? <img src={Project3Dark} alt="image of third project" /> : <img src={Project3Light} alt="image of third project" />}
        </div>
        <div className="col col2">

          <h4>Portfolio Website</h4>

            <div className='tech-container'>
              <div className='tech-stack-btn'>
                  <div className='tech-stack-content'>
                    <p>React</p>
                    <FontAwesomeIcon icon={faReact} />
                  </div>
              </div>
              <div className='tech-stack-btn'>
                <div className='tech-stack-content'>
                  <p>Sass</p>
                  <FontAwesomeIcon icon={faSass} />
                </div>
              </div>
            </div>

          <div className="description">
            <p className='ul-label'>This is my personal portfolio website you are currently viewing.</p>
          </div>
          <div className="description">
            <p className='ul-label'>Its main purpose is to introduce myself, however building it was a great opportunity to get more comfortable with React and learn Sass (SCSS).</p>

          </div>
          <div className='cta-buttons'>

            <a target='_blank' href="https://marcelfronczak.github.io/portfolio/" className='cta-page'>Live Page</a>
            <a target='_blank' href="https://github.com/MarcelFronczak/portfolio.git" className='cta-code'>Source Code</a>
          </div>
        </div>
      </div>

        <a target="_blank" href="https://github.com/MarcelFronczak?tab=repositories" className="btn-cta-github">
          <div className="btn-cta-github-content">
            <p>See more on GitHub</p>
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </a>

    </section>
  )
}

export default Projects
