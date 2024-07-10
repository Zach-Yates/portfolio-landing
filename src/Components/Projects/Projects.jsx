import React from 'react'
import './Projects.css'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import {Link} from 'react-router-dom'
import iphones_image from '../../assets/phones.png'
import smoothie_image from '../../assets/smoothie-ph.jpg'
import game_image from '../../assets/gameco-ss.png'
import { FaExternalLinkAlt } from "react-icons/fa";
import github_icon from '../../assets/github-mark.png'

const Projects = () => {


  return (
    <div className='projects'>

      <div className='projects__title'>
        <h2>PORTFOLIO</h2>
      </div>

      <div className='projects__subtitle'>
        <h2>Each project is a unique piece of development</h2>
      </div>

      <div className='project'>

        <div className='project__img'>
          <img src={iphones_image}/>
        </div>

        <div className='project__info'>
          <h3>iPhones 4 Less</h3>

          <p>iPhones 4 Less is dedicated to bringing the world's most sought after product to the consumer at more appealing price point.
          Choose your model, find your finish, and set the storage on your new favorite device!
          </p>

          {/* <div className='project__tech'>
            <h2 className='tech__left'>React</h2>
            <h2 className='tech__right'>Vanilla Css</h2>
          </div> */}
          
          <div className='project__links'>

            <Router>
            <div className='github_link'>

              <Link to='https://github.com/Zach-Yates/portfolio-computer-company' className='code_text'>Code</Link>

              <Link to='https://github.com/Zach-Yates/portfolio-computer-company'>
                <img className='icon' src={github_icon} />
              </Link>

            </div>

            <div className='demo_link'>
              <Link to='https://zach-yates.github.io/portfolio-computer-company/' className='demo_text' onClick={() => window.open('https://zach-yates.github.io/portfolio-computer-company/','_self')}>Live Demo</Link>

              <Link to='https://zach-yates.github.io/portfolio-computer-company/' onClick={() => window.open('https://zach-yates.github.io/portfolio-computer-company/','_self')}>
                <FaExternalLinkAlt size="20px" color="black"/>
              </Link>
            </div>
            </Router>

          </div>
        </div>

      </div>

      {/* <div className='project'>



      <div className='project__info__mid'>
        <h3>smoothie shop</h3>

        <p>A website for a game company. Browse their library and download their games.</p>

        <div className='project__tech'>
          <h2 className='tech__left'>React</h2>
          <h2 className='tech__right'>Vanilla Css</h2>
        </div>
        
        <div className='project__links'>
        <Router>

          <div className='github_link'>
            <Link to='https://github.com/Zach-Yates' className='code_text'>Code</Link>

            <Link to='https://github.com/Zach-Yates'>
              <img className='icon' src={github_icon} />
            </Link>
          </div>

          <div className='demo_link'>
            <Link to='/gameHome' className='demo_text'>Live Demo</Link>

            <Link to='/gameHome'>
              <FaExternalLinkAlt size="20px" color="black"/>
            </Link>
          </div>
          </Router>
        </div>
      </div>

      <div className='project__img__mid'>
        <img src={smoothie_image}/>
      </div>

      </div> */}



      <div className='project'>

      <div className='project__img'>
        <img src={game_image}/>
      </div>

      <div className='project__info'>
        <h3>game company</h3>

        <p>A website for a video game company. Browse and enjoy a showcase of 93 Game Studio's mobile offerings. The site is playful and colorful to express the fun found in the gameplay of each experience.</p>

        {/* <div className='project__tech'>
          <h2 className='tech__left'>React</h2>
          <h2 className='tech__right'>Vanilla Css</h2>
        </div> */}
        
        <div className='project__links'>
        <Router>

          <div className='github_link'>
            <Link to='https://github.com/Zach-Yates/portfolio-game-company' className='code_text'>Code</Link>

            <Link to='https://github.com/Zach-Yates/portfolio-game-company'>
              <img className='icon' src={github_icon} />
            </Link>
          </div>

          <div className='demo_link'>
            <Link to='https://zach-yates.github.io/portfolio-game-company/' className='demo_text'>Live Demo</Link>

            <Link to='https://zach-yates.github.io/portfolio-game-company/'>
              <FaExternalLinkAlt size="20px" color="black"/>
            </Link>
          </div>
          </Router>
        </div>
      </div>

      </div>

    </div>
  )
}

export default Projects
