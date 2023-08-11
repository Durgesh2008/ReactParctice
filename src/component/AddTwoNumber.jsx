import React, { useState } from 'react'

const AddTwoNumber = () => {
    const [FirstNumber,setFirstNumber]=useState(parseInt(0));
    const [SecondNumber,setSecondNumber]=useState(parseInt(0));
    const [Total,setTotal]=useState(0);
    const [isclick,setIsclick]=useState(false)
const Addtion=()=>{
  
    setTotal(parseInt(FirstNumber)+parseInt(SecondNumber));
    
}

  return (

    <div className="w-full max-w-xs">
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
          First Number
        </label>
        <input onChange={(e)=>{setFirstNumber(e.target.value)}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" value={FirstNumber}/>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
          Second Number
        </label>
        <input onChange={(e)=>{setSecondNumber(e.target.value)}} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="number" value={SecondNumber}/>
      </div>
      <div className="flex items-center justify-between">
        <button onClick={Addtion} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
         Add 
        </button>
        
      </div>
      <div className="mt-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
       Total
        </label>
        <input onChange={(e)=>{setTotal(e.target.value)}} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="number" value={Total}/>
      </div>
      
    </form>
   
  </div>
  )
}

export default AddTwoNumber
