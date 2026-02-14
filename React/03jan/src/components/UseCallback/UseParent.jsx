import React, {useState,useCallback} from 'react'
import Display from './Display';
import Button from './Button';

function UseParent() {

    let[age,setAge] = useState(23)
    let[salary,setSalary] = useState(20000)

    const incrementAge = useCallback(()=>{
        setAge(age+1)
    },[age])

    const incrementSalary = useCallback(()=>{
        setSalary(salary+10000)
    },[salary])

    console.log("Parent Render");
  return (
    <>
<Display  content='Age' val={age}  ></Display>
<Button handleClick = {incrementAge}> Change Age</Button> 
<Display  content='Salary' val={salary} ></Display>
<Button handleClick = {incrementSalary} >Change Salary</Button>

    </>
  )
}

export default UseParent