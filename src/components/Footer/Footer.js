import React, { useContext } from 'react'
import '../Footer/footer.css'
import { UseSpanishContext } from '../../Context/UseSpanishContext'
import { msgFooter } from '../../lang/en-es-lang'

function Footer() {
  const [ useSpanish] = useContext(UseSpanishContext)
  
  return (
    <div>
      <footer class="bg-dark text-center text-white borderFooter">
        <div class="container p-2 pb-0">
          <section class="mb-2">
            <a class="iconsFooter mx-3" href="#!"
              ><i class="fab fa-facebook-f"></i
            ></a>
            <a class="iconsFooter mx-3" href="#!" role="button"
              ><i class="fab fa-instagram"></i
            ></a>
            <a class="iconsFooter mx-3" href="#!" role="button"
              ><i class="fab fa-linkedin-in"></i
            ></a>
            <a class="iconsFooter mx-3" href="#!" role="button"
              ><i class="fab fa-github"></i
            ></a>
          </section>
        </div>
        <div class="text-center p-2 footerBack">{!useSpanish?msgFooter.en.footer:msgFooter.es.footer}
          {/* Developed and designed by Busi Alejandro ©2021. All rights reserved. */}
        </div>
      </footer>
    </div>
  )
}
export default Footer
