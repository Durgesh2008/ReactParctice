import React, { useState } from 'react'
import Dropdown from './Dropdown'


const MultilevelDropdown = () => {
  const [Isselect,setisselect]=useState(false)
 
 
  const data=[
    {
      label: "Menu 1",
    },
    {
      label: "Menu 2",
      submenu: [{ label: "Sub Menu 1" }, { label: "Sub Menu 2" }],
    },
    {
      label: "Menu 3",
      submenu: [
        { label: "Sub Menu 1" },
        { label: "Sub Menu 2" },
        { label: "Sub Menu 3" },
        { label: "Sub Menu 4" },
      ],
    },
    {
      label: "Menu 4",
      submenu: [{ label: "Sub Menu 1" }, { label: "Sub Menu 2" }],
    },
  ];
  const handle=(e)=>{
console.log(e.target)
  }
  return (
    <div onClick={handle} className='w-[500px] m-auto flex flex-col'>
      {data.map((ele,j)=>{
       return (<Dropdown  key={`hell${j}`} name={ele.label} submenu={ele.submenu} />)
      })}
    
     

    </div>
  )
}

export default MultilevelDropdown
