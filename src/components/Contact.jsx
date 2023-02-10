import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import '../styles/contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

function Contact() {
  const {theme} = useContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Function to be added soon ;)')
  }

  return (
    <section id='contact' className={'contact ' + theme}>
      <h3>CONTACT</h3>
      <div className="contact-flex-container">
        <div className="contact-col-1">
          <form className='form'>
            <h4>Send me an email</h4>
            <input type="text" placeholder='Your Name' readOnly required />
            <input type="text" placeholder='Your message...' readOnly required />
            <button onClick={handleSubmit} type=''>SEND</button>
          </form>
        </div>
        <div className="contact-col-2">
          <ul className="contact-items">
            <li className="contact-item">
              <div className="icon-box">
                <FontAwesomeIcon icon={faPhone} className='social-icon' />
              </div>
              <p className='contact-text' >+48 608 562 772</p>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <FontAwesomeIcon icon={faEnvelope} className='social-icon' />
              </div>
              <p className='contact-text' >marcel.fronczak@gmail.com</p>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <FontAwesomeIcon icon={faLinkedinIn} className='social-icon' />          
              </div>
              <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/marcel-fronczak-88523022b/' className='contact-text' >LinkedIn</a>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <FontAwesomeIcon icon={faGithub} className='social-icon' />       
              </div>
              <a target='_blank' rel="noreferrer" href='https://github.com/MarcelFronczak' className='contact-text' >GitHub</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contact
