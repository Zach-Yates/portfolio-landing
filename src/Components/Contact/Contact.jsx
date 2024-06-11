import React from 'react'
import './Contact.css'
import { FaMapLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <div className='contact'>

    <div>
    <div className='contact__title'>
        <h2>contact</h2>
      </div>

      <div className='contact__subtitle'>
        <h2>Lets Connect!</h2>
      </div>
    </div>


      <div className='contact__info'>

        <div className='contact__location'>
          <div className='location_left'>
            <FaMapLocationDot color='blue' size='35px'/>
          </div>

          <div className='location_right'>
            <h3>Location</h3>
            <p>Rogers, AR</p>
          </div>
        </div>

        <div className='contact__mail'>

          <div className='mail_left'>
            <IoIosMail color='blue' size='35px'/>
          </div>

          <div className='mail_right'>
            <h3>Mail</h3>
            <p>johnson.zach.dev@gmail.com</p>
          </div>

        </div>
      </div>


    </div>
  )
}
import './Contact.css'

export default Contact
