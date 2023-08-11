import React, { useState } from 'react'

const Fizzbuzz = () => {
   const [count,setcount] =useState(parseInt(1))
   const handleDecrement=()=>{
    setcount(count-1)
   }
   const handleIncrement=()=>{
    setcount(count+1)
   }
  return (
    <div className='bg-gray-500 w-full m-auto flex flex-col items-center justify-center'>
    <h1> React Fizz Buzz </h1>
    <p> Counting incrementally, replacing any number divisible by three with
      the word "fizz", and any number divisible by five with the word
      "buzz". </p>

    <h2>
      {count % 15 === 0
        ? "FizzBuzz"
        : count % 3 === 0
        ? "Fizz"
        : count % 5 === 0
        ? "Buzz"
        : count}
    </h2>
    <button className='' onClick={handleDecrement}> - </button>
    <button onClick={handleIncrement}> + </button>
  </div>
  )
}

export default Fizzbuzz
