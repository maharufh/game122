import React,{useState,useMemo} from 'react'

function UseMemo() {
    let[counter1,setCounter1] = useState(0);
    let[counter2,setCounter2] = useState(10);

    function incrementC1(){
        setCounter1(counter1  + 1)
    }
    function incrementC2(){
        setCounter2(counter2  + 1)
    }

    const isEven = useMemo(()=>{
        let i = 0;
        while(i<1000000) i ++
        return  counter1%2 == 0
    },[counter1])
    

  return (
    <div>
        <h4>Counter-1</h4>
        <button onClick={incrementC1}>increment {counter1}</button>
        <span>{isEven ? 'Even' : 'Odd'}</span>
        <h4>Counter-2</h4>
        <button onClick={incrementC2}>increment {counter2}</button>
    </div>
  )
}

export default UseMemo