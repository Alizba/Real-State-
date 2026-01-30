import React from 'react'
import './Hero.css'
import hero from '../../assets/hero.jpg'
import { MapPin } from 'lucide-react'

function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="hero-container">
        {/* left side */}
        <div className="hero-left">
          <div className="hero-title">
            <div className="orange-circle"/>
            <h1>
              Discover <br />
              Most Suitable <br/> 
              <span className="highlight">Property</span>
            </h1>
          </div>
          
          <div className="hero-des">
            <span className="secondaryText">Find a variety of properties that suit you very easily</span>
            <span className="secondaryText">Forget all difficulties in finding a residence for you</span>
          </div>

          <div className="search-bar">
            <MapPin color="var(--blue)" size={25} />
            <input type="text" placeholder="Search by location, property type..." />
            <button className="button">Search</button>
          </div>

          <div className="stats">
            <div className="stat">
              <span className="stat-number">
                <span className="plus">9,000</span>
                <span className="plus-sign">+</span>
              </span>
              <span className="stat-label">Premium Properties</span>
            </div>
            <div className="stat">
              <span className="stat-number">
                <span className="plus">2,000</span>
                <span className="plus-sign">+</span>
              </span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat">
              <span className="stat-number">
                <span className="plus">28</span>
                <span className="plus-sign">+</span>
              </span>
              <span className="stat-label">Award Winning</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="hero-right">
          <div className="image-container">
            <img src={hero} alt='hero'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero