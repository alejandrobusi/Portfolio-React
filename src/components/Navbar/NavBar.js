import React from 'react'
import face from '../../assets/DSC_20491.jpg'
import "../Navbar/navBar.css"
import { NavLink } from 'react-router-dom'

function NavBar(props) {
  return (
    <div>
      <header className="sticky-top">
        <nav className="navbar navbar-expand-lg navbar-dark animate__animated animate__fadeIn bgNav shadow">
          <div className="container justify-content-lg-between justify-content-md-center justify-content-sm-center">
            <div>
              <img src={face} className="imgNav mx-4" alt="ImagePerson"/>
              <a className="navbar-brand">Alejandro Busi</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink exact to="/" className="navLink" activeClassName="navLinkActive" aria-current="page" >Home</NavLink>
                <NavLink exact to="/about"className="navLink" activeClassName="navLinkActive" aria-current="page" >About</NavLink>
                <NavLink exact to="/home" className="navLink" activeClassName="navLinkActive" aria-current="page" >Portfolio</NavLink>
                <NavLink exact to="/home" className="navLink" activeClassName="navLinkActive" aria-current="page" >Contact Me</NavLink>
                
                {/* <li className="navLink">
                  <NavLink exact to="/home" className="navLink" activeClassName="navLinkActive">Home</NavLink>
                </li>
                <li className="navLink">
                  <NavLink exact to="/about" className="navLink" activeClassName="navLinkActive">About</NavLink>
                </li>
                <li className="navLink">
                  <NavLink exact to="/home" className="navLink" activeClassName="navLinkActive">Portfolio</NavLink>
                </li>
                <li className="navLink">
                  <NavLink exact to="/home" className="navLink" activeClassName="navLinkActive">Contact Me</NavLink>
                </li> */}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default NavBar