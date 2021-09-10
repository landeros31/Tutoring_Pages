import React from 'react'
import style from './TutorCard.module.css'

function TutorCard(tcard) {
  return (
    <div className={style.tutorCard}>
       <div className={style.containerimg}><img src={tcard.image} alt={tcard.name} /></div>
       <h2>{tcard.name} </h2>
       <h3>{tcard.description} </h3>
    </div>
  )
}

export default TutorCard
