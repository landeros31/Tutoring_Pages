
import style from './Selector.module.css'
import React,{useState} from 'react'

function Selector(data) {
  
   const [quantity,setquantity]=useState(0)
   
   //console.log(data.info)
  //console.log(data.info.set)
   const plus=()=>{
     setquantity(quantity+1)
     console.log(data.id)
     //setproducts(products.concat(data));
      //<ConfirmBuy datos={data} />
     //setproducts([...products, data.info])
     data.info.set([...data.info.valor, data.info]) ;
     
   }
   const minus=()=>{
    setquantity(quantity-1)
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

export default Selector
