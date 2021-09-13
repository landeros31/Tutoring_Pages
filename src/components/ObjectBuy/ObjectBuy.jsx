import SelectorF from '../SelectF/SelectF'
import style from './ObjectBuy.module.css'
import {FaTimes} from 'react-icons/fa'
import { dataSelection } from '../../Context/Context'
import {useContext,useState} from 'react'
import {DateTimePicker} from '@material-ui/pickers'

function ObjectBuy(datos) {

  
  const [date,setdate]=useState(new Date());


const{result,setresult} = useContext(dataSelection)


const remove=()=>{
  
  let data2=result.filter(fil=>fil.id!==datos.id);
  let data4=result.filter(fil=>fil.id===datos.id);
  data4.splice(datos.id,1)
  
  data2=data2.concat(data4) 
  
  setresult([])

  setresult(data2)
 }
 

  return (
    <div className={style.object}>
        <div className={style.orderdata}>
      <h2>{datos.name} </h2>
      <h3>{datos.subject} </h3>
      <div className={style.select} ><SelectorF /></div>
      <div className={style.date}> <DateTimePicker  value={date} onChange={setdate}  /> </div>
      <button onClick={remove} className={style.div1}><FaTimes/></button>
      </div>
      <hr />
    </div>
  )
}

export default ObjectBuy
