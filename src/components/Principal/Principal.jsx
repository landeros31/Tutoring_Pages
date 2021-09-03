import React from 'react'
import {FaWhatsapp} from 'react-icons/fa'
import style from './Principal.module.css'

function Principal() {
  return (
    <div className={style.principal}>
      <h4>Tutores Personalizados</h4>
      <button className={style.button}>
        <div className={style.whatsapp}> <FaWhatsapp/></div>
        <h3>¡ Solicita Tutor ya !</h3>
      </button>
    </div>
  )
}

export default Principal
