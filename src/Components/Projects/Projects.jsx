import React from 'react'
import './Projects.css'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import {Link} from 'react-router-dom'
import iphones_image from '../../assets/phones.png'
import nft_image from '../../assets/nft.png'
import game_image from '../../assets/gameco-ss.png'
import lore_image from '../../assets/lore-ss.png'
import { FaExternalLinkAlt } from "react-icons/fa";
import github_icon from '../../assets/github-mark.png'

const Projects = () => {


  return (
    <div className='projects'>

      <div className='projects__title'>
        <h2>DEMOS</h2>
      </div>

      <div className='projects__subtitle'>
        <h2>Dynamic design meets seamless functionality.</h2>
      </div>

      {/* PROJECT */}
      <div className='project'>

        <Router>
        <div className='project__img'>
          <Link to='https://zach-yates.github.io/portfolio-computer-company/' className='demo_text' onClick={() => window.open('https://zach-yates.github.io/portfolio-computer-company/','_self')}><img src={iphones_image}/> </Link>
        </div>
        </Router>

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

      {/* PROJECT */}
      <div className='project'>

        <div className='project__info__mid'>

          <h3>More Lore!</h3>

          <p>A web app that makes it easy for users learn about their favorite game world.
          Each game has a collection of videos including a story recap, speedrun, full playthrough, and retrospective.
          Users can even create an account to track their progress!
          </p>

          
          <div className='project__links'>
          <Router>

            {/* <div className='github_link'>
              <Link to='https://github.com/Zach-Yates/portfolio-nft-wallet-viewer' className='code_text'>Code</Link>

              <Link to='https://github.com/Zach-Yates/portfolio-nft-wallet-viewer'>
                <img className='icon' src={github_icon} />
              </Link>
            </div> */}

            <div className='demo_link'>
              <Link to='https://lore-199e6.web.app/' className='demo_text' onClick={() => window.open('https://lore-199e6.web.app/','_self')}>Live Demo</Link>

              <Link to='https://lore-199e6.web.app/' onClick={() => window.open('https://lore-199e6.web.app/','_self')}>
                <FaExternalLinkAlt size="20px" color="black"/>
              </Link>
            </div>
            </Router>
          </div>
        </div>

        <Router>
          <div className='project__img__mid'>
          <Link to='https://lore-199e6.web.app/' className='demo_text' onClick={() => window.open('https://lore-199e6.web.app/','_self')}><img src={lore_image}/> </Link>
          </div>
        </Router>
      </div>
      
      {/* PROJECT */}
      <div className='project'>
      <Router>
      <div className='project__img'>
        <Link to='https://zach-yates.github.io/portfolio-game-company/' className='demo_text' onClick={() => window.open('https://zach-yates.github.io/portfolio-game-company/','_self')}><img src={game_image}/> </Link>
      </div>
      </Router>


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
            <Link to='https://zach-yates.github.io/portfolio-game-company/' className='demo_text' onClick={() => window.open('https://zach-yates.github.io/portfolio-game-company/','_self')}>Live Demo</Link>

            <Link to='https://zach-yates.github.io/portfolio-game-company/' onClick={() => window.open('https://zach-yates.github.io/portfolio-game-company/','_self')}>
              <FaExternalLinkAlt size="20px" color="black"/>
            </Link>
          </div>
          </Router>
        </div>
      </div>

      </div>

     {/* PROJECT */}
     <div className='project'>

      <div className='project__info__mid'>

        <h3>Nft Wallet Viewer</h3>

        <p>A website that makes it easy to view nft collections. 
        Simply plug in a wallet's public address and the user will be able to tab through each nft in the collection.
        The site also provides celebrity nft wallets the user can check out if they get curious.
        </p>

        
        <div className='project__links'>
        <Router>

          <div className='github_link'>
            <Link to='https://github.com/Zach-Yates/portfolio-nft-wallet-viewer' className='code_text'>Code</Link>

            <Link to='https://github.com/Zach-Yates/portfolio-nft-wallet-viewer'>
              <img className='icon' src={github_icon} />
            </Link>
          </div>

          <div className='demo_link'>
            <Link to='https://zach-yates.github.io/portfolio-nft-wallet-viewer/' className='demo_text' onClick={() => window.open('https://zach-yates.github.io/portfolio-computer-company/','_self')}>Live Demo</Link>

            <Link to='https://zach-yates.github.io/portfolio-nft-wallet-viewer/' onClick={() => window.open('https://zach-yates.github.io/portfolio-computer-company/','_self')}>
              <FaExternalLinkAlt size="20px" color="black"/>
            </Link>
          </div>
          </Router>
        </div>
      </div>

      <Router>
      <div className='project__img__mid'>
        <Link to='https://zach-yates.github.io/portfolio-nft-wallet-viewer/' className='demo_text' onClick={() => window.open('https://zach-yates.github.io/portfolio-nft-wallet-viewer/','_self')}><img src={nft_image}/> </Link>
      </div>
      </Router>

      
      </div>

    </div>
  )
}

export default Projects
