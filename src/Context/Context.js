import React,{createContext} from 'react'

export const dataSelection=createContext();

function Context({children}) {
  return (
    <dataSelection.Provider>
        {children}
    </dataSelection.Provider>

  )
}

export default Context
