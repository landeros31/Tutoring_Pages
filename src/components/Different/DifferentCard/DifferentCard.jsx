import React from 'react'
import style from './DifferentCard.module.css'

function DifferentCard(different) {
  return (
    <div className={style.tutorCard}>
    <div className={style.containerimg}><img src={different.image} alt={different.name} /></div>
    <h2>{different.name} </h2>
    <h3>{different.description} </h3>
 </div>
  )
}

export default DifferentCard
