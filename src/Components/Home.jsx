import React from 'react'
import Navbar from './Navbar/Navbar.jsx'
import Hero from './Hero/Hero.jsx'
import Stack from './Stack/Stack.jsx'
import About from './About/About.jsx'
import Projects from './Projects/Projects.jsx'
import Contact from './Contact/Contact.jsx'
import Footer from './Footer/Footer.jsx'

const Home = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Stack/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default Home
