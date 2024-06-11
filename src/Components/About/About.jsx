import React from 'react'
import './About.css'
import about_me_image from '../../../../assets/about-image-ph.png'

const About = () => {
  return (
    <div className='about'>

      <div className='about__img'>
          <img src={about_me_image}/>
      </div>

      <div className='about__text'>

        <div className='about__title'>
          <h2>about me</h2>
        </div>

        <div className='about__subtitle'>
          <h3>A dedicated Font-end Developer based in Rogers, Arkansas</h3>
        </div>

        <div className='about__p'>
          <p>As a game developer with a knack for creating captivating mobile experiences,
          I've honed my skills delivering successful games for iOS and Android platforms. 
          Now, I'm excited to pivot my expertise towards front-end web development, 
          where I can apply my creative problem-solving skills and passion for user 
          experience to crafting engaging and intuitive online interfaces. With a solid foundation 
          in ReactJs, I'm eager to immerse myself in the dynamic 
          world of web development and contribute to building
          immersive digital experiences on the web.</p>
        </div>
      </div>


    </div>
  )
}
import './About.css'

export default About
