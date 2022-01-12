import React, { useContext } from 'react'
import '../About/about.css'
import face from '../../assets/face.png'
import logoJs from '../../assets/skills/js2.png'
import logoMongo from '../../assets/skills/mongo.png'
import nodeJs from '../../assets/skills/nodejs.png'
import bootstrap from '../../assets/skills/bootstrap.png'
import postman from '../../assets/skills/postman.png'
import css3 from '../../assets/skills/css.png'
import htmlLogo from '../../assets/skills/html.png'
import git from '../../assets/skills/git.png'
import reactLogo from '../../assets/skills/react.png'
import trello from '../../assets/skills/trello.png'
import { UseSpanishContext } from '../../Context/UseSpanishContext'
import  { msgAbout } from '../../lang/en-es-lang'


function About(props) {
  const [ useSpanish] = useContext(UseSpanishContext)
  
  return (
    <div>
      <h1 className="text-center text-uppercase lined py-3">{!useSpanish?msgAbout.en.aboutMe:msgAbout.es.aboutMe}</h1>
      <section className="my-5">
        <div className="container wow animate__animated animate__bounceIn">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row justify-content-center">
                      <div className="col-sm-6 col-md-5">
                        <div className="shadowPng">
                          <img src={face} className="img-fluid" alt="Imagen rostro"/>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-7">
                        <div className="">
                          <i className="fas fa-user"></i><p><span className="title-s">{!useSpanish?msgAbout.en.name:msgAbout.es.name}</span> <span>Alejandro Busi</span></p>
                          <i className="fas fa-briefcase"></i><p><span className="title-s">{!useSpanish?msgAbout.en.profile:msgAbout.es.profile}</span> <span>full stack developer</span></p>
                          <i className="fas fa-inbox"></i><p><span className="title-s">{!useSpanish?msgAbout.en.email:msgAbout.es.email}</span> <span>alejandrobusi@gmail.com</span></p>
                          <i className="fas fa-mobile-alt"></i><p><span className="title-s">{!useSpanish?msgAbout.en.telephone:msgAbout.es.telephone}</span> <span>(381) 156266303</span></p>
                        </div>
                      </div>
                    </div>
                    </div>
                    <div className="col-md-6">
                      <div className="pt-4 pt-md-0">
                        <div>
                          <h5>
                            <strong>{!useSpanish?msgAbout.en.h5:msgAbout.es.h5}</strong>
                          </h5>
                        </div>
                        <p className="lead">
                          {!useSpanish?msgAbout.en.p1:msgAbout.es.p1}
                        </p>
                        <p className="lead">
                          {!useSpanish?msgAbout.en.p2:msgAbout.es.p2}
                        </p>
                        <p className="lead">
                          {!useSpanish?msgAbout.en.p3:msgAbout.es.p3}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container my-5 wow animate__animated animate__bounceIn">
        <h1 className="text-center text-uppercase lined py-3">{!useSpanish?msgAbout.en.skills:msgAbout.es.skills}</h1>
          <div className="row justify-content-center col-sm-6 col-md-12 col-xl-12">
            <div class="card mx-2 my-2">
              <img src={logoJs} class="mt-2 card-img-top" alt="javascript"/>
              <div class="card-body">
                <p class="card-text text-center">JavaScript.</p>
              </div>
            </div>
            <div class="card mx-2 my-2">
              <img src={logoMongo} class="mt-2 card-img-top" alt="Mongo DB"/>
              <div class="card-body">
                <p class="card-text text-center">Mongo DB.</p>
              </div>
            </div>
            <div class="card mx-2 my-2">
              <img src={nodeJs} class="mt-2 card-img-top" alt="Node JS."/>
              <div class="card-body">
                <p class="card-text text-center">Node JS.</p>
              </div>
            </div>
            <div class="card mx-2 my-2">
              <img src={bootstrap} class="mt-2 card-img-top" alt="Bootstrap"/>
              <div class="card-body">
                <p class="card-text text-center">Bootstrap.</p>
              </div>
            </div>
            <div class="card mx-2 my-2">
              <img src={postman} class="mt-2 card-img-top" alt="Postman"/>
              <div class="card-body">
                <p class="card-text text-center">Postman.</p>
              </div>
            </div>
            <div class="card mx-2 my-2">
              <img src={css3} class="mt-2 card-img-top" alt="Css3"/>
              <div class="card-body">
                <p class="card-text text-center">CSS.</p>
              </div>
            </div>
            <div class="card mx-2 my-2">
              <img src={htmlLogo} class="mt-2 card-img-top" alt="HTML"/>
              <div class="card-body">
                <p class="card-text text-center">HTML.</p>
              </div>
            </div>
            <div class="card mx-2 my-2">
              <img src={git} class="mt-2 card-img-top" alt="Git"/>
              <div class="card-body">
                <p class="card-text text-center">GIT.</p>
              </div>
            </div>
            <div class="card mx-2 my-2">  
              <img src={reactLogo} class="mt-2 card-img-top" alt="React"/>
              <div class="card-body">
                <p class="card-text text-center">React.</p>
              </div>
            </div>
            <div class="card mx-2 my-2">
              <img src={trello} class="mt-2 card-img-top" alt="Trello"/>
              <div class="card-body">
                <p class="card-text text-center">Trello.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="container d-flex justify-content-center">
        <button className="btn btn-warning my-5" href="../../assets/AlejandroBusiCV.pdf">{!useSpanish?msgAbout.en.download:msgAbout.es.download}</button>
        </section>
    </div>
  )
}

export default About

