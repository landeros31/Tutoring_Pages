import React from 'react'
import style from './Footer.module.css'
import {FaWhatsapp} from 'react-icons/fa'
import {FaTelegram} from 'react-icons/fa'
import {FaEnvelope} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'

function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.ajust}>
      <div className={style.containerFoot}>
      <div className={style.tittle}>
          <h1>Tutorías académicas </h1>
          <h2>Lo que Tu Necesitas</h2>   
          <p>Bogota D.C Colombia</p>
      </div>
      <div className={style.buy}>
        <h2>Metodos de Pago</h2>
        <p>Efectivo</p>
        <p>Nequi</p>
        <p>Daviplata</p>
      </div>
      </div>
      <div>
        <div className={style.contact}>
          <div> <FaWhatsapp/> </div>
          <h4>3002223658 - 3045390847</h4>
        </div>
        <div className={style.contact}>
          <div> <FaTelegram/> </div>
          <h4>3002223658 - 3045390847</h4>
        </div>
        <div className={style.contact}>
           <div className={style.contact}> <FaEnvelope/> </div>  
          <h4>tutoriasacademicas@gmail.com</h4>
        </div>
      </div>
      </div>
      <div className={style.copy}>
        <p>© copyright Tutorias Acedemicas</p>
           <div><FaGithub/> </div>
       </div>

    </div>
  )
}

export default Footer
