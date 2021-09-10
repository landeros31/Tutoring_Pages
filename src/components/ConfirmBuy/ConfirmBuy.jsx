import React from 'react'
import style from './ConfirmBuy.module.css'
import {FaWhatsapp} from 'react-icons/fa'
import ObjectBuy from '../ObjectBuy/ObjectBuy'
import { Link } from 'react-router-dom'

function ConfirmBuy(datoss) {
 
  console.log(datoss)
  const datoscard=[
    {
      "id": 4,
      "name":"Preparacion para examenes",
      "description": "$ 20.000/ hora",
      "subject":"Español"

    },
    {
      "id": 3,
      "name":"Clase presencial",
      "description": "$ 20.000/ hora",
      "subject":"Ingles"

    }
  ]
   
  return (
    <div className={style.confirm}>
       <div className={style.containerBuy}>
            <h1>Clases Programadas:</h1> 
            <div className={style.selection}>aqui deberia ir lo que seleccione </div>
            <div>
              {
                datoscard.map(el=> <ObjectBuy name={el.name} subject={el.subject} description={el.description} key={el.id} />)
              }
            </div>
            <div className={style.buy}>
               <div className={style.price}>$0000</div>
               <button className={style.button}>
             
               
               <div> <FaWhatsapp/> </div>
                 <h3>Enviar</h3></button>
             
  
            <a href="https://api.whatsapp.com/send?phone=573202863760&text=holamahhhhhhhhhhhhhhhhhhhhh">prueba</a>
            
            </div>

       </div>
    </div>
  )
}

export default ConfirmBuy
