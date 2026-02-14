import React,{useState,useEffect} from 'react'

export default function StopWatch() {
 
    let[isRunning,setIsRunning] = useState(false);
    let[time,setTime] = useState(0)

    useEffect(() =>{
        if(!isRunning) return
        let intervalId = setInterval(() =>{
            
            setTime(prev => prev +  1)
        },1000)

        return () =>{
            clearInterval(intervalId)
            console.log('CleanUp Function');
        }
    },[isRunning])

    function reset(){
       
        setTime(0)
        setIsRunning(false)
    }
    function formatWatch(){
        let mins = Math.trunc(time/60);
        let seconds = time % 60;

        let formatMins = mins<10 ? `0${mins}` : mins;
        let formatSecs =  seconds <10? `0${seconds}` : seconds;
        return `${formatMins} :: ${formatSecs}`
    }
  return (
    <>
    {/* <h1>Count: {count}</h1> */}
    <h2>{formatWatch()}</h2>
<button onClick={()=>setIsRunning(true)}>Start</button>
<button onClick={()=>setIsRunning(false)}>Stop</button>
<button onClick={reset}>Reset</button>
 



    </>
  )
}
