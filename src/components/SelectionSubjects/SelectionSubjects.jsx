import {FaChevronDown} from 'react-icons/fa'
import style from './SelectionSubjects.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Dropdown,DropdownItem,DropdownToggle,DropdownMenu} from 
'reactstrap'
import React,{useState} from 'react' 
import {Link} from 'react-router-dom'

function SelectionSubjects() {
 
  const [dropdown, setDropdown]=useState(false);

  const openclose=()=>{
   setDropdown(!dropdown)
   console.log("si")

  }

  return (
    <div className={style.selection}>
      <div className={style.containerServices}>
        <h3> Nuestros Servicios</h3>
      </div>
      <div className={style.containerMenu}>
      <Dropdown isOpen={dropdown} toggle={openclose}>
      <DropdownToggle>
        <div>Asignaturas<FaChevronDown/></div>
      </DropdownToggle>

     <DropdownMenu>
        <Link to="/español">
        <DropdownItem>Español</DropdownItem>
          </Link> 

          <Link to="/ingles">
          <DropdownItem>Ingles</DropdownItem>   
          </Link>
       
       <Link to='/matematicas'>
       <DropdownItem>Matematicas</DropdownItem>
       </Link>
       <Link to='/quimica'>
       <DropdownItem>Quimica</DropdownItem>
       </Link>
       
     </DropdownMenu>


    </Dropdown>
      
     </div>

    </div>
  )
}

export default SelectionSubjects
