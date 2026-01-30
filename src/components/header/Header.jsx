import React from 'react'
import './Header.css'
import logoText from '../../assets/logo-txt.png'

function Header() {
  return (
    <section className="h-wrapper">
        <div className="flexCenter padding innerWidth h-container">
            <img src={logoText} alt='logo' width={200} style={{height: 'auto'}}/>

            <div className="flexCenter h-menu">
              <a href="#residencies">Residencies</a>
              <a href="#values">Our Values</a>
              <a href="#contact">Contact Us</a>
              <a href="#started">Get Started</a>
              <button className="button">
                <a>Contact</a>
              </button>
            </div>
        </div>
    </section>
  )
}

export default Header