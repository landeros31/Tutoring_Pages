import React from 'react'
import ShoppDataChemistry from '../../../data/DataSubjects/ShoppingChemistry'

import CardShopp from '../CardShopp/CardShopp'
import style from '../Shopp.module.css'
function ShoppChemistry() {
  return (
    <div className={style.shopp}>
      {
      ShoppDataChemistry.map(el=> <CardShopp tittle={el.name} images={el.img} info={el.description} subject={el.subject} id={el.id}  key={el.id}  />  )  
       
      }
      
    </div>
  )
}

export default ShoppChemistry;
