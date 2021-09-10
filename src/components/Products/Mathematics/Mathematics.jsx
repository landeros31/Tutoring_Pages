import React from 'react'
import Button from '../../ButtonProgram/Button'
import SelectionSubjects from '../../SelectionSubjects/SelectionSubjects'
import ShoppMathematics from '../../Shopp/ShoppMathematics/ShoppEnglish'
import style from './Matematicas.module.css'

function Mathematics() {
  return (
    <div className={style.mathematics}>
      <SelectionSubjects/>
      <h1>Matematicas</h1>
     <ShoppMathematics/>
      <Button/>
    </div>
  )
}

export default Mathematics
