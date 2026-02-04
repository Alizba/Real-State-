import react from 'react'
import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Companies from './components/companies/Companies'
import Residencies from './components/residencies/Residencies'
import Value from './components/value/Value'
import Contact from './components/contact/contact'
import CTA from './components/CTA/cta'
import Footer from './components/footer/footer'

function App() {

  return (
    <>
      <div>
        <Header/>
        <Hero/>
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <Contact/>
      <CTA/>
      <Footer/>
    </>
  )
}

export default App
