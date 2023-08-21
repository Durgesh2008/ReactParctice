import React, { useReducer } from 'react'
const intitialValue={
    firstcounter:0,secondcounter:10
}
const reducer=(state,action)=>{
switch (action.type) {
    case 'increment':
        return {...state,firstcounter:state.firstcounter+action.value};
    case 'decrement':
         return {...state,firstcounter:state.firstcounter-action.value};
         case 'increment2':
         return {...state,secondcounter:state.secondcounter+action.value};
         case 'decrement2':
         return {...state,secondcounter:state.secondcounter-action.value};
     case 'reset':
        return intitialValue;
    default:
        return state;
}
}
const HookReducer = () => {
    const [count ,dispatch]=useReducer(reducer,intitialValue);
  return (
    <div className='flex flex-col items-center py-2 gap-3'>
    <div className='text-[16px] p-3 border text-[#f7f4f4] rounded w-[10%] bg-[#3978d6]'>count-{count.firstcounter}</div>
    <div className='text-[16px] p-3 border text-[#f7f4f4] rounded w-[10%] bg-[#3978d6]'>count2-{count.secondcounter}</div>
      <button  onClick={()=>{dispatch({type:'increment',value:1})}} className='text-[16px] p-3 border text-[#f7f4f4] rounded w-[10%] bg-[#3978d6]'>Incerment </button>
      <button  onClick={()=>{dispatch({type:'decrement',value:1})}} className='text-[16px] p-3 border text-[#f7f4f4] rounded w-[10%] bg-[#3978d6]'> Decrement  </button>
      <button  onClick={()=>{dispatch({type:'increment2',value:2})}} className='text-[16px] p-3 border text-[#f7f4f4] rounded w-[10%] bg-[#3978d6]'>Incerment2 </button>
      <button  onClick={()=>{dispatch({type:'decrement2',value:2})}} className='text-[16px] p-3 border text-[#f7f4f4] rounded w-[10%] bg-[#3978d6]'> Decrement2  </button>
      <button  onClick={()=>{dispatch({type:'reset'})}}     className='text-[16px] p-3 border text-[#f7f4f4] rounded  w-[10%] bg-[#3978d6]'> Reset</button>
    </div>
  )
}

export default HookReducer
