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
    setsearchRes(people)
  },[])
  useEffect(()=>{
  if(searchRes.includes(SearchTerm))
    setsearchRes([SearchTerm])
 else{
    setsearchRes(people)
 }
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
