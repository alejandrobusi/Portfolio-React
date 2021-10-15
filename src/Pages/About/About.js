import React from 'react'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/Navbar/NavBar'
import AboutComp from '../../components/About/About'


function About() {
  return (
    <div className="vh-100">
      <NavBar/>
      <AboutComp/>
      <Footer/>
    </div>
  )
}

export default About
