import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import '../styles/skills.scss'

function Skills() {
  const {theme} = useContext(ThemeContext);
  return (
    <section className={'skills ' + theme} id='skills'>
      <h3>SKILLS</h3>
      <div className='content-wrap'>
        <p>These are the main technologies I’ve been using over the last year.<br></br>In the near future I’m planning to learn <span className='bolder'>Typescript</span> and <span className='bolder'>Node.js</span>.</p>
        <div className='tech-stack-container'>

        </div>
      </div>
    </section>
  )
}

export default Skills
