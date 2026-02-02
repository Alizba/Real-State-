import react from 'react'
import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Companies from './components/companies/Companies'
import Residencies from './components/residencies/Residencies'
function App() {

  return (
    <>
      <div>
        <Header/>
        <Hero/>
      </div>
      <Companies/>
      <Residencies/>
    </>
  )
}

export default App
