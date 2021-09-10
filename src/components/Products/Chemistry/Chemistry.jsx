import React from 'react'
import Button from '../../ButtonProgram/Button'
import SelectionSubjects from '../../SelectionSubjects/SelectionSubjects'
import ShoppChemistry from '../../Shopp/ShoppChemistry/ShoppChemistry'
import style from './Chemistry.module.css'

function Chemistry() {
  return (
    <div className={style.chemistry}>
      <SelectionSubjects/>
      <h1>Quimica</h1>
         <ShoppChemistry/>
      <Button/>
    </div>
  )
}

export default Chemistry
