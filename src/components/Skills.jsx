import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import '../styles/skills.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faSquareJs, faHtml5, faCss3, faGitAlt, faGithub, faFigma, faSass } from '@fortawesome/free-brands-svg-icons'

function Skills() {
  const {theme} = useContext(ThemeContext);
  return (
    <section className={'skills ' + theme} id='skills'>
      <h3>SKILLS</h3>
      <div className='content-wrap'>
        <p>These are the main technologies I’ve been using over the last year.<br></br>In the near future I’m planning to learn <span className='bolder'>Typescript</span> and <span className='bolder'>Node.js</span>.</p>
        <div className='flex-wrap'>
          <div className='tech-stack-container'>
            <div className='tech-stack-btn'>
              <div className='tech-stack-content'>
                <p>React</p>
                <FontAwesomeIcon icon={faReact} />
              </div>
            </div>
            <div className='tech-stack-btn'>
              <div className='tech-stack-content'>
                <p>JS</p>
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
            <div className='tech-stack-btn'>
              <div className='tech-stack-content'>
                <p>Sass</p>
                <FontAwesomeIcon icon={faSass} />
              </div>
            </div>
            <div className='tech-stack-btn'>
              <div className='tech-stack-content'>
                <p>Git</p>
                <FontAwesomeIcon icon={faGitAlt} />
              </div>
            </div>
            <div className='tech-stack-btn'>
              <div className='tech-stack-content'>
                <p>GitHub</p>
                <FontAwesomeIcon icon={faGithub} />
              </div>
            </div>
            <div className='tech-stack-btn'>
              <div className='tech-stack-content'>
                <p>Figma</p>
                <FontAwesomeIcon icon={faFigma} />
              </div>
            </div>
          </div>
          </div>
      </div>
    </section>
  )
}

export default Skills
