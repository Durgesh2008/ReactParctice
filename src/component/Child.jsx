import React, { useEffect } from 'react'

const Child = ({setcall}) => {
    const cb=()=>{
        return function () {
         return (  <h1>parent is calling</h1>)
        }
    }
    useEffect(()=>{
        setcall(cb)
    },[])
  return (
    <div>
      child
    
    </div>
  )
}

export default Child
