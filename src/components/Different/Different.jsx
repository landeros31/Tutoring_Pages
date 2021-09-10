import React from 'react'
import differentData from '../../data/Different'
import DifferentCard from './DifferentCard/DifferentCard'
import style from './Different.module.css'

function Different() {
 ////filtro para soloperimeras dos
 //console.log(differentData)
  const data2=differentData.filter(fil=>fil.space.includes(1))
  //console.log(data2)
  const data3=differentData.filter(fil=>fil.space.includes(2))
  
  //console.log(data3)
  return (
    <div className={style.different}>

      <h2 className={style.tittles}>¿Que nos hace diferentes?</h2>
      <div className={style.different2}>
      <div className={style.container1}>   
      {
      
      data2.map(el=> <DifferentCard  image={el.imgs} name={el.tittle} description={el.description} key={el.id}  />)

      }    
      </div>
      <div className={style.container2}>
      {
      data3.map(el=> <DifferentCard  image={el.imgs} name={el.tittle} description={el.description} key={el.id}  />)

      }
      </div>
      
    </div>
    </div>
  )
}



export default Different
