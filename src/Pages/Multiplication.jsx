import React from 'react'
import { mycontext } from '../App'
import { useContext } from 'react'
function Multiplication() {
    const {numtwoFun,numoneFun,total1,getmultiply} = useContext(mycontext)
  return (
    <div>
        <input type="text" onChange={numoneFun}/>
        <input type="text" onChange={numtwoFun}/>
        <button onClick={getmultiply}>MUL</button>
        <h1>{total1}</h1>
    </div>
  )
}

export default Multiplication