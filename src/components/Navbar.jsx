import React, { useContext, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import '../styles/navbar.scss'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faXmark, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const {theme, setTheme} = useContext(ThemeContext);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className={theme}>
      <div className='nav-content'>
        <button className='menu-btn' onClick={() => setOpenMenu(!openMenu)}>
          {openMenu ? <FontAwesomeIcon icon={faXmark} className='xmark'/> : <FontAwesomeIcon icon={faBarsStaggered}/>}
        </button>
        <ul className={openMenu ? 'open' : ''}>
          <li><Link to="home" spy={true} smooth={true} offset={0} duration={400} onClick={() => setOpenMenu(false)}>HOME</Link></li>
          <li><Link to="skills" spy={true} smooth={true} offset={-50} duration={400} onClick={() => setOpenMenu(false)}>SKILLS</Link></li>
          <li><Link to="projects" spy={true} smooth={true} offset={-50} duration={400} onClick={() => setOpenMenu(false)}>PROJECTS</Link></li>
          <li><Link to="" spy={true} smooth={true} offset={-50} duration={400} onClick={() => setOpenMenu(false)}>ABOUT</Link></li>
          <li><Link to="" spy={true} smooth={true} offset={-50} duration={400} onClick={() => setOpenMenu(false)}>CONTACT</Link></li>
        </ul>
        <ul className='menu-web'>
          <li><Link to="home" spy={true} smooth={true} offset={0} duration={500}>HOME</Link></li>
          <li><Link to="skills" spy={true} smooth={true} offset={-50} duration={400}>SKILLS</Link></li>
          <li><Link to="projects" spy={true} smooth={true} offset={-50} duration={500}>PROJECTS</Link></li>
          <li><Link to="" spy={true} smooth={true} offset={-50} duration={500}>ABOUT</Link></li>
          <li><Link to="" spy={true} smooth={true} offset={-50} duration={500}>CONTACT</Link></li>
        </ul>
        <span className='toggle-btn' >
          <input type="checkbox" id="toggle" />
          <label htmlFor="toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <FontAwesomeIcon icon={faMoon} className='moon' />
            : <FontAwesomeIcon icon={faSun} className='sun' />}
          </label>
        </span>
      </div>
    </nav> 
  )
}

export default Navbar
