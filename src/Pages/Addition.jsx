import React from 'react'
import { mycontext } from '../App'
import { useContext } from 'react'
function Addition() {
    const {numtwoFun,numoneFun,total,getTotal} = useContext(mycontext)
  return (
    <div>
        <input type="text" onChange={numoneFun}/>
        <input type="text" onChange={numtwoFun}/>
        <button onClick={getTotal}>ADD</button>
        <h1>{total}</h1>
    </div>
  )
}

export default Addition