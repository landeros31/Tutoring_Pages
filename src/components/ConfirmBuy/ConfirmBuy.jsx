import React from 'react'
import style from './ConfirmBuy.module.css'
import {FaWhatsapp} from 'react-icons/fa'
import ObjectBuy from '../ObjectBuy/ObjectBuy'
import { useContext} from 'react'
import { dataSelection } from '../../Context/Context'

function ConfirmBuy() {
 
const {result,valor} = useContext(dataSelection)

  
  let message=[]

    result.forEach(el => {
     message.push(el.tittle)
     message.push(el.subject)
     
  });

   
  
  return (
    <div className={style.confirm}>
       <div className={style.containerBuy}>
            <h1>Clases Programadas:</h1> 
            <div className={style.order}>
          <h3>Clase</h3>
          <h3>Asignatura</h3>
          
          <h3>Horas</h3>
          <h3>Fecha</h3>

        </div>
        <hr />
            <div>
              {
                result.map((el,index) => <ObjectBuy name={el.tittle} subject={el.subject} description={el.description} id={el.id}  index={el.index} key={index} />)
              }
            </div>
            <div className={style.buy}>
               <div className={style.price}>${valor} </div>
             
                 <a className={style.an}  href={`https://api.whatsapp.com/send?phone=573202863760&text= Estoy interesado en programar  ${message} podrias porfavor confirmarme las clases `}> <button className={style.button}>Enviar <div><FaWhatsapp/></div> </button> </a>
               
            
            </div>

       </div>
    </div>
  )
}

export default ConfirmBuy
