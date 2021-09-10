import React from 'react'
import style from './CardSubjects.module.css'
import {Link} from "react-router-dom";

function CardSubjects(card) {
  return (
    
    <div className={style.cardsubjects} >
      <div className={style.containerTittle} > <h3>{card.tittle} </h3> </div>
     <div className={style.containerImag}><img src={card.images} alt={card.moreInfo} /></div>
     <Link to={card.link}>
     <div className={style.containerMore}> <h4>{card.moreInfo} </h4></div>
     </Link>
     
     
    </div>
    
  )
}

export default CardSubjects
