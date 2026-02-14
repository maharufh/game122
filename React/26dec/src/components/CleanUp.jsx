import React,{useState,useEffect} from 'react'

export default function CleanUp() {
    let[count,setCount] = useState(0);
    let[isRunning,setIsRunning] = useState(false);
     

    useEffect(() =>{
        if(!isRunning) return
        let intervalId = setInterval(() =>{
            setCount(prev => prev + 1)
        },1000)

        return () =>{
            clearInterval(intervalId)
            console.log('CleanUp Function');
        }
    },[isRunning])

    function reset(){
        setCount(0)
        
        setIsRunning(false)
    }
   
  return (
    <>
    <h1>Count: {count}</h1>
    
<button onClick={()=>setIsRunning(true)}>Start</button>
<button onClick={()=>setIsRunning(false)}>Stop</button>
<button onClick={reset}>Reset</button>
 



    </>
  )
}
