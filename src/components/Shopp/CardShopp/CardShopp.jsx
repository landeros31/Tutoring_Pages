import React from 'react'
import Selector from '../../Selector/Selector'
import style from './CardShopp.module.css'
function CardShopp(card) {

  return (
    <div className={style.cardshopp} >
    <div className={style.containerTittle} > <h3>{card.tittle} </h3> </div>
   <div className={style.containerImag}><img src={card.images} alt={card.info} /></div>
   <div className={style.adds}>
     <h3>{card.info} </h3>
     <Selector info={card} />

   </div>
  </div>
  )
}

export default CardShopp
