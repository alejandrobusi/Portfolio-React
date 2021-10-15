import React from 'react'
import face from '../../assets/face.png'

function About() {
  return (
    <div>
      <h1 className="text-center text-uppercase lined py-3">About me</h1>
      <section className="my-5" id="about">
        <div className="container wow animate__animated animate__bounceIn">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row justify-content-center">
                      <div className="col-sm-6 col-md-5">
                        <div>
                          <img src={face} className="img-fluid shadowPng" alt="Imagen rostro"/>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-7">
                        <div className="">
                          <i className="fas fa-user"></i><p><span className="title-s">Nombre: </span> <span>Alejandro Busi</span></p>
                          <i className="fas fa-briefcase"></i><p><span className="title-s">Perfil: </span> <span>full stack developer</span></p>
                          <i className="fas fa-inbox"></i><p><span className="title-s">Email: </span> <span>alejandrobusi@gmail.com</span></p>
                          <i className="fas fa-mobile-alt"></i><p><span className="title-s">Telefono: </span> <span>(381) 156266303</span></p>
                        </div>
                      </div>
                    </div>
                    </div>
                    <div className="col-md-6">
                      <div className="pt-4 pt-md-0">
                        <div>
                          <h5>
                            <strong>Acerca de mi...</strong>
                          </h5>
                        </div>
                        <p className="lead">
                          Hola. Soy Ale, tengo 27 años, soy soltero y vivo en San Miguel de 
                          Tucumán. Soy un apasionado por la tecnología desde chico. Me 
                          gusta mucho la informática. la electrónica y la fotografía. Si Ud. 
                          necesita referencias  por favor solicíteme.
                        </p>
                        <p className="lead">
                          Me destaco tanto en hardware como en software. Las tecnologías de la informática son algo que siempre me ha fascinado. Estoy en el proceso de formación constantemente.
                        </p>
                        <p className="lead">
                          Siempre dispuesto a mejorar. Personalmente e intelectualmente. Considero el desarrollo de habilidades blandas y habilidades duras como mi prioridad en este viaje como programador.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          
        </section>
    </div>
  )
}

export default About

