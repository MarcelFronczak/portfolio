import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import '../styles/home.scss'

function Home() {
  const {theme} = useContext(ThemeContext);
  return (
    <section className={theme} id='home'>
      <div>
        <h1>Hi, I'm<br></br><span>Marcel Fronczak</span></h1>
        <p>Junior Frontend Developer</p>
      </div>
    </section>
  )
}

export default Home
