import React from 'react'
import Selector from '../Selector/Selector'
import style from './ObjectBuy.module.css'
function ObjectBuy(datos) {
  return (
    <div className={style.object}>
      <h2>{datos.name} </h2>
      <h3>{datos.subject} </h3>
      <h3>{datos.description} </h3>
      <Selector/>
    </div>
  )
}

export default ObjectBuy
