import React, { useEffect, useState } from 'react'

const Search = () => {
    const people = [
        "Shashi Koshy",
        "Dhriti Taneja",
        "Dipa Mishra",
        "Ansh Thakkar",
        "Lakshmi Thaker",
        "Sushila Matthai",
        "Shresth Nigam",
        "Bhavana Biswas",
        "Vasudha Mangat",
        "Priya Saran"
      ];
    const [SearchTerm,setSerachTerm]=useState("");
    const [searchRes,setsearchRes]=useState([]);
 
  useEffect(()=>{
 
    const timer=setTimeout(() => {
      const result=people.filter((person)=>{
        setSerachTerm(SearchTerm.trim());
        return  person.toLowerCase().includes(SearchTerm.toLowerCase())
       })
       setsearchRes(result);
    }, 500);
    return () => clearTimeout(timer);
  },[SearchTerm])
  return (
    <>
    <input className='ml-10' type="text" value={SearchTerm} onChange={(e)=>{setSerachTerm(e.target.value)}} placeholder='search'/>
    <ul className='ml-10'>
    {searchRes.map((ele,index)=>{
  return (<li key={index} >{ele}</li>)
})}
    </ul>
    </>
  )
}

export default Search
