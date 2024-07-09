import React from 'react'
import './Hero.css'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import { Link } from 'react-router-dom'
import github_icon from '../../assets/github-mark-white.png'
import linkdin_icon from '../../assets/In-Blue-128.png'
import pic_of_me from '../../assets/ME-1.png'


const Hero = () => {
  return (
    <div className='hero'>

      <div className='left'>
        <h1>Front-End React Developer</h1>

        <p>Hi, I'm Zach Johnson. A passionate Front-end React Developer based in Rogers, Ar.</p>

        <div className='icons'>
          <Router>
            <Link to='https://github.com/Zach-Yates'>
                <img src={github_icon} />
            </Link>
            <Link to='https://www.linkedin.com/in/zach-johnson-427b58b6'>
                <img  src={linkdin_icon} />
            </Link>
          </Router>
        </div>

      </div>


      <div className='right'>
        <img className='profile-img' src={pic_of_me} alt="Person" />
      </div>

    </div>
  )
}

export default Hero
