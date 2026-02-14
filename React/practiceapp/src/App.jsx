import React,{ useEffect, useState } from 'react'
// import Parent from './components/Parent'
 
 
 

function  App  () {
    let [u,setU] = useState(null);

    useEffect(() =>{
      async function fetchData(){
        let res = await fetch("http://localhost:3000/user");
        const data = await res.json();
        setU(data);
      }
      fetchData();

    },[])

  return (
    <>
  
  {/* <Parent/> */}
  <h1>helo from frontend</h1>
  { u && <>

  <h1>name = {u.name}</h1>
  <h2>age = {u.age}</h2>

  </>
  }
 
     
    </>
  )
}

export default App
