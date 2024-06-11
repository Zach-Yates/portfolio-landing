import React from 'react'
import './Stack.css'
import html5_icon from '../../../../assets/html-5.svg'
import css_icon from '../../../../assets/css-3.svg'
import js_icon from '../../../../assets/js.svg'
import react_icon from '../../../../assets/react.svg'
import vite_icon from '../../../../assets/vite.svg'

const Stack = () => {
  return (
    <div className='stack'>

      <div className='stack__text'>
        <h3>Tech Stack</h3>
      </div>

      <div className='stack__icons'>
        <img src={html5_icon} />
        <img src={css_icon} />
        <img src={js_icon} />
        <img src={react_icon} />
        <img src={vite_icon} />
      </div>

    </div>
  )
}

export default Stack
