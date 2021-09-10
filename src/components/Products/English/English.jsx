import React from 'react'
import Button from '../../ButtonProgram/Button'
import SelectionSubjects from '../../SelectionSubjects/SelectionSubjects'
import ShoppingEnglish from '../../Shopp/shoppEnglish/ShoppEnglish'
import style from './English.module.css'

function English() {
  return (
    <div className={style.english}>
      <SelectionSubjects/>
      <h1>Ingles</h1>
     <ShoppingEnglish/>
      <Button/>

    </div>
  )
}

export default English
