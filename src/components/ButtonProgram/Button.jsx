import React from 'react'
import style from './Button.module.css'
import {Link} from 'react-router-dom'

function Button() {
  return (
    <div>
      <Link to="/shoppingC">
      <button className={style.button}>Programar Clase</button>
      </Link>
    </div>
  )
}

export default Button
