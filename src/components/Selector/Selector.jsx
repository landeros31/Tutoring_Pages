
import style from './Selector.module.css'
import React,{useContext} from 'react'
import { dataSelection } from '../../Context/Context'

function Selector(data) {
  
  const {result,setresult} = useContext(dataSelection)

   
   //console.log(data.info)
   
   //console.log(result)
   const plus=()=>{
     
    setresult([...result, data.info]) ;
    alert("Agregada Exitosamente")
     
   }
  
  return (
    <div className={style.state}>
    <div className={style.button}><button className={style.min} onClick={plus}>Agregar</button> </div>

 </div>
  )
}

export default Selector
