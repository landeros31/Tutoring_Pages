import React from 'react'
import SubjectsData from '../../Subjects'
import CardSubjects from './CardSubjects/CardSubjects'
import style from '../subjects/Subjects.module.css'

function Subjects() {
  return (
    <div className={style.subjects}>
      <div className={style.tittle}><h2>Asignaturas</h2></div>
      <div className={style.containerSubjects}>
        {
          SubjectsData.map(el=> <CardSubjects tittle={el.name} images={el.images} moreInfo={el.more} key={el.id}   /> )
        }
        </div> 
      
    </div>
  )
}

export default Subjects
