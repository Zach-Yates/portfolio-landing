import React from 'react'
import './Projects.css'
import {Link} from 'react-scroll'
import {Link as RLink} from 'react-router-dom'
import park_image from '../../../../assets/park-ph.jpg'
import smoothie_image from '../../../../assets/smoothie-ph.jpg'
import game_image from '../../../../assets/gameco-ss.png'
import { FaExternalLinkAlt } from "react-icons/fa";
import github_icon from '../../../../assets/github-mark.png'

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
          <img src={park_image}/>
        </div>

        <div className='project__info'>
          <h3>CompCo</h3>

          <p>CompCo is a third party apple certified Premier Partner. 
          CompCo's website allows customers to browse their fine selection of refurbished Apple products.
          Compare prices with Apple to see how much you can save when shopping with CompCo. Setup servicing for
          a device experiencing a range of issues.
          </p>

          <div className='project__tech'>
            <h2 className='tech__left'>React</h2>
            <h2 className='tech__right'>Vanilla Css</h2>
          </div>
          
          <div className='project__links'>

            <div className='github_link'>
              <RLink to='https://github.com/Zach-Yates' className='code_text'>Code</RLink>

              <RLink to='https://github.com/Zach-Yates'>
                <img className='icon' src={github_icon} />
              </RLink>
            </div>

            <div className='demo_link'>
              <RLink to='/comp_home' className='demo_text'>Live Demo</RLink>

              <RLink to='/comp_home'>
                <FaExternalLinkAlt size="20px" color="black"/>
              </RLink>
            </div>

          </div>
        </div>

      </div>

      <div className='project'>



      <div className='project__info__mid'>
        <h3>smoothie shop</h3>

        <p>A website for a game company. Browse their library and download their games.</p>

        <div className='project__tech'>
          <h2 className='tech__left'>React</h2>
          <h2 className='tech__right'>Vanilla Css</h2>
        </div>
        
        <div className='project__links'>

          <div className='github_link'>
            <RLink to='https://github.com/Zach-Yates' className='code_text'>Code</RLink>

            <RLink to='https://github.com/Zach-Yates'>
              <img className='icon' src={github_icon} />
            </RLink>
          </div>

          <div className='demo_link'>
            <RLink to='/gameHome' className='demo_text'>Live Demo</RLink>

            <RLink to='/gameHome'>
              <FaExternalLinkAlt size="20px" color="black"/>
            </RLink>
          </div>

        </div>
      </div>

      <div className='project__img__mid'>
        <img src={smoothie_image}/>
      </div>

      </div>

      <div className='project'>

      <div className='project__img'>
        <img src={game_image}/>
      </div>

      <div className='project__info'>
        <h3>game company</h3>

        <p>A website for a game company. Browse their library and download their games.</p>

        <div className='project__tech'>
          <h2 className='tech__left'>React</h2>
          <h2 className='tech__right'>Vanilla Css</h2>
        </div>
        
        <div className='project__links'>

          <div className='github_link'>
            <RLink to='https://github.com/Zach-Yates' className='code_text'>Code</RLink>

            <RLink to='https://github.com/Zach-Yates'>
              <img className='icon' src={github_icon} />
            </RLink>
          </div>

          <div className='demo_link'>
            <RLink to='/gameHome' className='demo_text'>Live Demo</RLink>

            <RLink to='/gameHome'>
              <FaExternalLinkAlt size="20px" color="black"/>
            </RLink>
          </div>

        </div>
      </div>

      </div>

    </div>
  )
}

export default Projects
