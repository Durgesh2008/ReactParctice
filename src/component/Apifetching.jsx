import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Apifetching = () => {
  const [Data,setData]=useState(null);
  const [user,setuser]=useState({
    title:'',body:'',userId:0
  })
  // Get request
  /* const fetchdata=async()=>{
    const res=await axios.get("https://randomuser.me/api/");
    setData(res.data.results);
  } */
  // const fetchdata=async()=>{
  //  const res=await fetch('https://randomuser.me/api/');
  //  const data=await res.json();
  //  setData(data.results)

  // }

  // post data using fetch
 /*  const postdata=async(user)=>{
    const res =await fetch('https://jsonplaceholder.typicode.com/posts',{
       method: 'POST',
       body:JSON.stringify(user),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },

    })
    const data= await res.json()
    setData(data)
  } */

  // post data using axios 
const postdata =async (user)=>{
const res=await axios.post('https://jsonplaceholder.typicode.com/posts',{user})
const data=await res.data;
setData(data)
}
  useEffect(()=>{
  // fetchdata();

  },[])
const handlechange=(e)=>{

let {name,value}=e.target;
setuser({...user , [name]:value})
}
const handlesubmit=(e)=>{
  e.preventDefault();
  postdata(user)
}
  return (
    <div>

      {/* map get data */}
  {/* {Data &&  Data.map((ele)=>{
      return ( <ul key={new Date().getTime()}>
           <li>{ele.gender}</li>
           <li>`${ele.name.title} ${ele.name.first} ${ele.name.last}`</li>
           <li>{ele.location.country}</li>
           <li>{ele.location.state}</li>
      </ul> )  
   })} */}

{/* send data using post req */}
<input onChange={handlechange} type="text" name='title' value={user.title} placeholder='title'/><br/><br/>
<input onChange={handlechange}  type="text" name='body' value={user.body} placeholder='body'/><br/><br/>
<input onChange={handlechange}  type="number" name='userId' value={user.userId} placeholder='userId'/><br/><br/>
<button onClick={handlesubmit} type='submit'>Submit</button>

{
  Data && console.log(Data)
}
    </div>
  )
}

export default Apifetching

