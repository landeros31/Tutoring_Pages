import React,{createContext, useState} from 'react'

export const dataSelection=createContext();

function Context({children}) {
  
  const [result, setresult]=useState([])
  const [valor, setvalor]=useState([])
  
  console.log(valor)
  console.log(result)
  return (
    <dataSelection.Provider value={{
       
      result,
      setresult,
      valor,
      setvalor
      

   

    }} >
        {children}
    </dataSelection.Provider>

  )
}

export default Context
