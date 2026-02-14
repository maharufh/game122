import React,{useState} from 'react'

export default function Parent() {
    let[count,setCount] = useState(0)
    let[name,setName] = useState('Abhi')

    console.log('Parent render');
  return (
    <>

 <h2>Parents Comp</h2>
 <button onClick={()=>setCount(count+1)} >Count:{count}</button>
 <h5>{name}</h5>
 <button onClick={()=>setName('Bunty')} > se</button>

    </>
  )
}
