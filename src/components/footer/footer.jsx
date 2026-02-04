import React from 'react'
import './footer.css'
import { FaFacebook, FaInstagram, FaX, FaDiscord, FaPinterest } from 'react-icons/fa6'

const footer = () => {
  return (
    <div className='section'>
        <div className='logo'>
            <FaFacebook size={32}/>
            <FaInstagram size={32}/>
            <FaX size={32}/>
            <FaDiscord size={32}/>
            <FaPinterest size={32}/>
        </div>
        <div className='options'>
            <a href="#">Home</a>
            <a href="#">Residencies</a>
            <a href="#">Our Values</a>
            <a href="#">Contact Us</a>
            <a href="#">Get Started</a>
        </div>
        <div className='copyright'>
            <p>Copyright 2022: Designed by - Alizba</p>
        </div>
    </div>
  )
}

export default footer