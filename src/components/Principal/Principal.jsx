import React from 'react'
import {FaWhatsapp} from 'react-icons/fa'
import style from './Principal.module.css'

function Principal() {
  return (
    <div className={style.principal}>
      <h4>Tutores Personalizados</h4>
     
     <a className={style.an} href={`https://api.whatsapp.com/send?phone=573202863760&text= Nesecito un Tutor lo mas pronto posible`}>
        <button className={style.button} > 
        <div className={style.whatsapp}> <FaWhatsapp/></div>
        <h3>¡ Solicita Tutor ya !</h3>
      </button> 
      </a>
      
    </div>
  )
}

export default Principal
