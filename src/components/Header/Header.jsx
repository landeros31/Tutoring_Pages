import React from 'react'
import style from './Header.module.css'
import {FaBars} from 'react-icons/fa';
import logo from '../../Assets/logo.png'
function Header() {
  return (
    <div className={style.header}>
      <div className={style.containerLogo}>
          <div className={style.containerImgLogo}>
            <img src={logo} alt="michi" />
            </div>
          <div className={style.containerTittle}> 
              <h4>Tutorías académicas </h4>
          
              <h5>Lo que Tu Necesitas</h5>           
          </div>
      </div >
      <div className={style.hambur}>  <FaBars/> </div>
    </div>
  )
}

export default Header
