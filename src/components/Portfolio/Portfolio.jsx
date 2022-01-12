import React, { useContext } from 'react'
import { UseSpanishContext } from '../../Context/UseSpanishContext'
import { msgPortfolio } from '../../lang/en-es-lang'
import '../Portfolio/portfolio.css'
import tp1 from '../../assets/portf/SharedScreenshot.jpg'
import tp2 from '../../assets/portf/SharedScreenshot2.jpg'
import tp3 from '../../assets/portf/SharedScreenshot 2.jpg'


function Portfolio() {
  const [ useSpanish] = useContext(UseSpanishContext)
  return (
        <div>
          <h1 className="text-uppercase text-center lined mb-5 py-3">{!useSpanish?msgPortfolio.en.portfolio:msgPortfolio.es.portfolio}</h1>
          <section className="container-fluid my-5 row justify-content-center col-sm-12 col-md-12 col-lg-12" id="port">
            <div className="cardPort mx-2 my-2 boxShadowFull">
              <img className="numberOne img-fluid  " src="./Img/n1.png" alt="Numero 1"/>
              <img src={tp1} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Centro Médico Integral TC</h5>
                <p className="card-text lead">{!useSpanish?msgPortfolio.en.cardText1:msgPortfolio.es.cardText1}</p>
                <a href="https://centromedicocmtc.netlify.app/" target="_blank" className="btn btn-warning">{!useSpanish?msgPortfolio.en.buttonView:msgPortfolio.es.buttonView}</a>
                <a href="https://centromedicocmtc.netlify.app/" target="_blank" className="btn btn-warning mx-2">{!useSpanish?msgPortfolio.en.buttonView:msgPortfolio.es.buttonView}</a>
              </div>
            </div>
            <div className="cardPort mx-2 my-2 boxShadowFull">
              <img className="numberTwo img-fluid  " src="./Img/n2.png" alt="Numero 1"/>
              <img src={tp2} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title ">Undefined Games</h5>
                <p className="card-text lead">{!useSpanish?msgPortfolio.en.cardText2:msgPortfolio.es.cardText2}</p>
                <a href="https://centromedicocmtc.netlify.app/" target="_blank" className="btn btn-warning ">{!useSpanish?msgPortfolio.en.buttonView:msgPortfolio.es.buttonView}</a>
                <a href="https://centromedicocmtc.netlify.app/" target="_blank" className="btn btn-warning mx-2">{!useSpanish?msgPortfolio.en.buttonView:msgPortfolio.es.buttonView}</a>
              </div>
            </div>
            <div className="cardPort mx-2 my-2 boxShadowFull">
              <img className="numberOne img-fluid  " src="./Img/n1.png" alt="Numero 1"/>
              <img src={tp3} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Challenge Weather App</h5>
                <p className="card-text lead">{!useSpanish?msgPortfolio.en.cardText2:msgPortfolio.es.cardText2}</p>
                <a href="https://centromedicocmtc.netlify.app/" target="_blank" className="btn btn-warning">{!useSpanish?msgPortfolio.en.buttonView:msgPortfolio.es.buttonView}</a>
                <a href="https://centromedicocmtc.netlify.app/" target="_blank" className="btn btn-warning mx-2">{!useSpanish?msgPortfolio.en.buttonView:msgPortfolio.es.buttonView}</a>
              </div>
            </div>
            <div className="cardPort mx-2 my-2 boxShadowFull">
              <img className="numberOne img-fluid  " src="./Img/n1.png" alt="Numero 1"/>
              <img src={tp3} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Centro Médico Integral TC</h5>
                <p className="card-text lead">{!useSpanish?msgPortfolio.en.cardText2:msgPortfolio.es.cardText2}</p>
                <a href="https://centromedicocmtc.netlify.app/" target="_blank" className="btn btn-warning">{!useSpanish?msgPortfolio.en.buttonView:msgPortfolio.es.buttonView}</a>
                <a href="https://centromedicocmtc.netlify.app/" target="_blank" className="btn btn-warning mx-2">{!useSpanish?msgPortfolio.en.buttonView:msgPortfolio.es.buttonView}</a>
              </div>
            </div>
            <div className="cardPort mx-2 my-2 boxShadowFull">
              <img className="numberOne img-fluid  " src="./Img/n1.png" alt="Numero 1"/>
              <img src={tp3} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Centro Médico Integral TC</h5>
                <p className="card-text lead">{!useSpanish?msgPortfolio.en.cardText2:msgPortfolio.es.cardText2}</p>
                <a href="https://centromedicocmtc.netlify.app/" target="_blank" className="btn btn-warning">{!useSpanish?msgPortfolio.en.buttonView:msgPortfolio.es.buttonView}</a>
                <a href="https://centromedicocmtc.netlify.app/" target="_blank" className="btn btn-warning mx-2">{!useSpanish?msgPortfolio.en.buttonView:msgPortfolio.es.buttonView}</a>
              </div>
            </div>
          </section>
    </div>
  )
}


export default Portfolio
