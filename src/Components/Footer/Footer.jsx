import React from 'react'
import './Footer.css'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Link } from 'react-router-dom'
import github_icon from '../../assets/github-mark-white.png'
import linkdin_icon from '../../assets/In-White-128.png'

const Footer = () => {
  return (
    <div className='footer'>

      <div className='footer__copy'>
        <h2>Copyright © {new Date().getFullYear()}. All rights are reserved</h2>
      </div>

      <div className='footer__links'>
      <Router>
        <Link to='https://github.com/Zach-Yates' className='left'>
              <img className='icon' src={github_icon} />
        </Link>

        <Link to='https://www.linkedin.com/in/zach-johnson-427b58b6' className='right'>
              <img className='icon' src={linkdin_icon} />
        </Link>
      </Router>
      </div>
    </div>
  )
}

export default Footer
