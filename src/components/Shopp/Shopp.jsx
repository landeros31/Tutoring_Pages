import shopDataEspanish from  '../../data/shopping.js'
import CardShopp from './CardShopp/CardShopp'
import style from './Shopp.module.css'
import React,{useState} from 'react'
import ConfirmBuy from '../ConfirmBuy/ConfirmBuy.jsx'

function Shopp() {
  
   const [prueba, setprueba]=useState([])
    console.log(prueba);
    <ConfirmBuy result={prueba} />
  return (
    <div className={style.shopp}>
      {
      shopDataEspanish.map(el=> <CardShopp tittle={el.name} images={el.img} info={el.description} subject={el.subject} id={el.id} key={el.id} set={setprueba} valor={prueba} />  )  
       
      }

      
    </div>
  )
}

export default Shopp
