
import style from './SelectF.module.css'
import React,{useState,} from 'react'
import {useContext} from 'react'
import { dataSelection } from '../../Context/Context'


function SelectorF() {
  
  const {valor,setvalor} = useContext(dataSelection)

  const [quantity,setquantity]=useState(0)
   
   
   const plus=()=>{
     setquantity(quantity+1)
     setvalor([quantity+1])
      
     

   }

   const minus=()=>{
    setquantity(quantity-1)
    setvalor([...valor,quantity-1])

    if(quantity===0){
      setquantity(0)
    }
  }

  
  return (
    <div className={style.state}>
    <div className={style.button} ><button className={style.min} onClick={minus}>-</button> </div>
    <div className={style.select} >{quantity} </div>
    <div className={style.button}><button className={style.min} onClick={plus}>+</button> </div>

 </div>
  )
}

export default SelectorF
