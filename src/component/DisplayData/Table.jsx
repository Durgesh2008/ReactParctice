import React, { useEffect, useState } from 'react'
import Tr from './Tr'
import axios from 'axios';

const Table = () => {
    const [Data,setData]=useState([]);
    const Fetchdata=async()=>{
       const res=await axios(" https://reqres.in/api/users");
       const value=res.data;
      setData(value.data)
    }
    useEffect(()=>{
Fetchdata()

    },[])
  return (
    
<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                 email
                </th>
                <th scope="col" className="px-6 py-3">
                 First Name
                </th>
                <th scope="col" className="px-6 py-3">
                   Last Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Avtar
                </th>
            </tr>
        </thead>
      
        {Data.map((ele)=>{
            return (<Tr key={ele.id} Id={ele.id} Email={ele.email} FirstName={ele.first_name} LastName={ele.last_name} Image={ele.avatar}/>)
        })}
       
       
    </table>
</div>

  )
}

export default Table
