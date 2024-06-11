import React, { useEffect, useState } from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'

const Navbar = () => {
  const [sticky,setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50? setSticky(true) : setSticky(false);
    })
  },[]);

  return (
    <nav className={`land__nav container ${sticky? 'dark-nav' : ''}`}>
      <h1>Zach.dev</h1>
      <ul>
        <li><Link to='hero' smooth={true} offset={-200} duration={500}>Home</Link></li>
        <li><Link to='about' smooth={true} offset={-200} duration={500}>About</Link></li>
        <li><Link to='projects' smooth={true} offset={-100} duration={500}>Projects</Link></li>
        <li><Link to='contact' smooth={true} offset={0} duration={500}>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
