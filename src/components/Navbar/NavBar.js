import React, { useContext } from 'react'
import face from '../../assets/DSC_20491.jpg'
import "../Navbar/navBar.css"
import { NavLink } from 'react-router-dom'
import { UseSpanishContext } from '../../Context/UseSpanishContext'
import { msgNavbar } from '../../lang/en-es-lang'

function NavBar(props) {
  const [ useSpanish, setUseSpanish ] = useContext(UseSpanishContext)
  return (
    <div>
      <section className="sticky-top">
        <nav className="navbar navbar-expand-lg navbar-dark animate__animated animate__fadeIn bgNav shadow">
          <div className="container justify-content-lg-between justify-content-md-center justify-content-sm-center">
            <div>
              <img src={face} className="imgNav mx-4" alt="ImagePerson"/>
              <a href="/#" className="navbar-brand">Alejandro Busi</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav align-items-center">
                <NavLink exact to="/home" className="navLink" activeClassName="navLinkActive" aria-current="page" >{!useSpanish?msgNavbar.en.home:msgNavbar.es.home}</NavLink>
                <NavLink exact to="/about"className="navLink" activeClassName="navLinkActive" aria-current="page" >{!useSpanish?msgNavbar.en.about:msgNavbar.es.about}</NavLink>
                <NavLink exact to="/portf" className="navLink" activeClassName="navLinkActive" aria-current="page" >{!useSpanish?msgNavbar.en.portfolio:msgNavbar.es.portfolio}</NavLink>
                <NavLink exact to="/contact" className="navLink" activeClassName="navLinkActive" aria-current="page" >{!useSpanish?msgNavbar.en.contactMe:msgNavbar.es.contactMe}</NavLink>
                <button className="btn btn-warning" onClick={() => {setUseSpanish(!useSpanish)}} >🇪🇸 🇬🇧</button>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </div>
  )
}

export default NavBar
