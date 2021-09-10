import React from 'react'
import TutorsData from '../../data/Tutors'
import style from './Tutors.module.css'
import TutorCard from './TutorCard/TutorCard'

function Tutors() {
  return (
    <div className={style.tutors}>
      <div className={style.containerTittle}><h3>Nuestros Tutores</h3></div>
      <div className={style.tutorsCards}>
        {
         
         TutorsData.map(el=> <TutorCard  image={el.images} name={el.name} description={el.description} key={el.id} />)


        }
      </div>
    </div>
  )
}

export default Tutors
