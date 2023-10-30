import React, { useState } from 'react'
import { createContext } from 'react'
import Addition from './Pages/Addition'
import Multiplication from './Pages/Multiplication';

export const mycontext = createContext()
function App() {
  const [numone,setNumone] = useState();
  const [numtwo,setNumtwo] = useState();
  const [total,setTotal] = useState();
  const [total1,setTotal1] = useState();
  const numoneFun = (e)=>{
      setNumone(e.target.value)
  }
  const numtwoFun = (e)=>{
    setNumtwo(e.target.value)
}
const getTotal = ()=>{
     setTotal(parseInt(numone) + parseInt(numtwo))
}
const getmultiply = ()=>{
  setTotal1(parseInt(numone) * parseInt(numtwo))
}
  return (
    <div>
       <mycontext.Provider value={{numtwoFun,numoneFun,getTotal,total,total1,getmultiply}}>
          <Addition/>
          <Multiplication/>
       </mycontext.Provider>
    </div>
  )
}

export default App