import React, { useContext } from 'react'
import '../Banner/banner.css'
import { UseSpanishContext } from '../../Context/UseSpanishContext'
import { msgBanner } from '../../lang/en-es-lang'

function Banner() {
  const [ useSpanish] = useContext(UseSpanishContext)

  return (
    <div>
      <section class="container-fluid bgImg shadow">
        <div class="container col-sm-8 col-md-8 wow animate__animated animate__bounceIn">
          <h2 class="shadowBanner pImgT">{!useSpanish?msgBanner.en.hello:msgBanner.es.hello}</h2>
          <h1 class="shadowBanner ext-uppercase text-xl ">Alejandro <span class="text-primary">Busi</span></h1>
          <h2 class="shadowBanner h4 font-weight-normal my-2 shadow pImgB">{!useSpanish?msgBanner.en.h2:msgBanner.es.h2}</h2>
        </div>
      </section>
    </div>
  )
}

export default Banner
