import React from 'react'
import style from './Header.module.css'
import logo from '../../Assets/logo.png'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div className={style.header}>
      
      <div className={style.containerLogo}>
          <div className={style.containerImgLogo}>
          <Link to="/">    <img src={logo} alt="michi" /></Link>
            </div>
            
          <div className={style.containerTittle}> 
          <h4>Tutorías académicas </h4>
          
          <h5>Lo que Tu Necesitas</h5>        
          </div>
          
      </div >
      
      <div className={style.menu}> 
      
      <ul>
      <Link to="/" className={style.lin}> <li>Clases</li> </Link>
      <Link to="/" className={style.lin}>  <li>Tutores</li> </Link>
      <Link to="/" className={style.lin}> <li>Nosotros</li> </Link>
      <Link to="/" className={style.lin}> <li>Contactos</li> </Link>
      </ul>
     
       </div>
    </div>
  )
}

export default Header
