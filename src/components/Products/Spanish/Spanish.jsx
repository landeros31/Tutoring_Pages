import React from 'react'
import Button from '../../ButtonProgram/Button'
import SelectionSubjects from '../../SelectionSubjects/SelectionSubjects'
import Shopp from '../../Shopp/Shopp'
import style from './Spanish.module.css'

function Espanish() {
  console.log()
  return (
    <div className={style.spanish}>
      <SelectionSubjects/>
      <h1>Español</h1>
     <Shopp/>
      <Button/>
             
    </div>
  )
}

export default Espanish 
