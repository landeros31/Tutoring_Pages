import React from 'react'
import style from './CardSubjects.module.css'
function CardSubjects(card) {
      console.log(card)
  return (
    
    <div className={style.cardsubjects} >
     <div className={style.containerTittle} > <h3>{card.tittle} </h3> </div>
     <div className={style.containerImag}><img src={card.images} alt={card.moreInfo} /></div>
     <div className={style.containerMore}> <h4>{card.moreInfo} </h4></div>
     
    </div>
    
  )
}

export default CardSubjects
