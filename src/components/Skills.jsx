import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function Skills() {
  const {theme} = useContext(ThemeContext);
  return (
    <section className={theme} id='skills'>
      <h3>SKILLS</h3>
      <div className='content-wrap'>
        <p></p>
        <div className='tech-stack-container'>
          
        </div>
      </div>
    </section>
  )
}

export default Skills
