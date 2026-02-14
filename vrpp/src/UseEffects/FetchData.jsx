import React,{useState,useEffect} from 'react'

function FetchData() {

    let[count,setCount] = useState(0);
    let[name,setName] = useState("Priyanshu");

    useEffect(()=>{
        console.log("useEffect-1 without dependency");
    })
    useEffect(()=>{
        console.log("useEffect-2 with  empty  dependency");
    },[])
    useEffect(()=>{
        console.log("useEffect-3.1 without dependency")
    },[count])
    useEffect(()=>{
        console.log("useEffect-3 without dependency");
    },[name])
     console.log("Component Renders");
  return (
    <>
   <h3>Fetching The Data</h3>
   <button onClick={()=>setCount(count+1)}>Count:{count}</button>
   <button onClick={()=>setName("alen")}>Name:{name}</button>

    </>
  )
}

export default FetchData