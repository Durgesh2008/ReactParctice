import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
   const [call,setcall]=useState('')

  return (
    <div>
      <Child setcall={setcall}/>
     {call!=='' && call()}
    </div>
  )
}

export default Parent
