import shopDataEnglish from '../../../data/DataSubjects/ShoppingEnglish'
import CardShopp from '../CardShopp/CardShopp'
import style from '../Shopp.module.css'
import React,{useState} from 'react'

function ShoppEnglish() {
  const [prueba, setprueba]=useState([])
  console.log(prueba)
  return (
    <div className={style.shopp}>
      {
      shopDataEnglish.map(el=> <CardShopp tittle={el.name} images={el.img} info={el.description} subject={el.subject} id={el.id}  key={el.id} set={setprueba} valor={prueba} />  )  
       
      }
      
    </div>
  )
}

export default ShoppEnglish
