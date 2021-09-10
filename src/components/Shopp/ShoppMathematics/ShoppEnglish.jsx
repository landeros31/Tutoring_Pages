import React from 'react'
import shopDataMathematics from '../../../data/DataSubjects/ShoppingMathematics'
import CardShopp from '../CardShopp/CardShopp'
import style from '../Shopp.module.css'
function ShoppMathematics() {
  return (
    <div className={style.shopp}>
      {
      shopDataMathematics.map(el=> <CardShopp tittle={el.name} images={el.img} info={el.description} id={el.id} subject={el.subject} key={el.id}  />  )  
       
      }
      
    </div>
  )
}

export default ShoppMathematics
