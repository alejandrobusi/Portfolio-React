import React from 'react'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/Navbar/NavBar'

function Home(props) {

  return (
    <div className="vh-100">
      <NavBar/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default Home
