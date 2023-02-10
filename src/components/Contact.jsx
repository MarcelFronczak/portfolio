import React, { useContext, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import '../styles/contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { send } from 'emailjs-com'

function Contact() {
  const {theme} = useContext(ThemeContext);
  const [status, setStatus] = useState('SEND');
  const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_USER_ID } = process.env;

  const [toSend, setToSend] = useState({
    from_name: '',
    reply_to: '',
    message: '',
  });

  const handleChange = (e) => {
    setToSend({...toSend, [e.target.name]: e.target.value})
  }

  const handleSend = (e) => {
    e.preventDefault();

    if(toSend.from_name !== '' && toSend.reply_to !== '' && toSend.message !== '') {
      setStatus('Sending...');
    
      send(
        REACT_APP_SERVICE_ID,
        REACT_APP_TEMPLATE_ID,
        toSend,
        REACT_APP_USER_ID
      )
      .then((response) => {
        console.log("Message has been sent!", response.status, response.text);
        setStatus('Sent successfully');
        setTimeout(() => {
          setStatus('SEND')
        }, 2500)
        setToSend({
          from_name: '',
          reply_to: '',
          message: '',
        })
      })
      .catch((err) => {
        console.log("Error!", err);
        setStatus('Try Again');
        setTimeout(() => {
          setStatus('SEND')
        }, 2000)
        setToSend({
          from_name: '',
          reply_to: '',
          message: '',
        })
      });
    } else {
      setStatus('Fill all fields');
      setTimeout(() => {
        setStatus('SEND')
      }, 2000)
    }
  }

  return (
    <section id='contact' className={'contact ' + theme}>
      <h3>CONTACT</h3>
      <div className="contact-flex-container">
        <div className="contact-col-1">
          <form className='form' action='submit' autoComplete='off'>
            <h4>Send me an email</h4>
            <input type="text" name='from_name' value={toSend.from_name} onChange={handleChange} placeholder='Your Name' required />
            <input type="email" name='reply_to' value={toSend.reply_to} onChange={handleChange} placeholder='Your Email' required />
            <input type="text" name='message' value={toSend.message} onChange={handleChange} placeholder='Your Message...' required />
            <button onClick={handleSend} type='submit'>{status}</button>
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
