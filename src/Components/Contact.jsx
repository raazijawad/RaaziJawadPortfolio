import React from 'react'
import { CONTACT } from '../constants'

const Contact = () => {
  const handleEmailClick = () => {
    // Opens Gmail compose with your email pre-filled
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${CONTACT.email}`;
    window.open(gmailUrl, "_blank");
  }

  return (
    <div className='border-b border-neutral-900 pb-20'>
      <h2 className='my-10 text-center text-4xl'>Get In Touch</h2>
      <div className='text-center tracking-tighter'>
        <p>{CONTACT.address}</p>
        <p>{CONTACT.phoneNo}</p>
        <p>
          <span
            onClick={handleEmailClick}
            className='text-cyan-400 hover:underline cursor-pointer'
          >
            {CONTACT.email}
          </span>
        </p>
      </div>
    </div>
  )
}

export default Contact
