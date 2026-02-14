import React from 'react'
import Button from './Components/Button';
import Counter from './Components/Counter';
// import Product from './Components/Product'; 
import Product2 from './Components/Product2';
import Login from './Components/Login';
import Registration from './Components/Registration';
import ParentComp from './Components/ParrentComp';
import Task from './Components/Task';
 
import HeroApp from './Components/HeroApp';
import Todo from   './Components/Todo'
import FetchData from './UseEffects/FetchData';
import UseApp from './UseContext/UseApp';
import AProduct from './axios/AProduct';
import AApp from './axios/AApp';
import Program from './Components/Program';
import RApp from './useReducer/Rapp';
//  import Trainer from "./Components/Trainer"
 
 function App() {
  // let name = 'Mahesh Babu';
  // let mernDetails  = {frontend:'react js',backend:'node',db:'sql',Trainer:'t1'}
  // let javaDetails  = {frontend:'react js',backend:'express',db:'sql',Trainer:'t2'}
   
   return (
      
    <>
      {/* <h1>Hello This is app component</h1> */}
      {/* // <h3>{name}</h3> */}
      {/* // <Trainer name={name} subject="MERN"></Trainer> */}
    
      {/* // <Course courseName={mernDetails}></Course>
      // <Course courseName={javaDetails}></Course> */}
      {/* </Button> */}
      {/* <Button> */}
        
      {/* <Counter/> */}
      {/* <Button/> */}
     {/* we can only perform inline event because react is declearative
    because we can't perform manupulation with real dom */}
  {/* <Product />  */}
  {/* <Product2/> */}
  {/* <Login/> */}
  {/* <Registration/> */}
  {/* <ParentComp/> */}
  {/* <Task/> */}
  {/* <HeroApp/> */}
  {/* <Todo/> */}
  {/* <FetchData/> */}
  {/* <UseApp/> */}
  {/* <AProduct/> */}
  <AApp/>
  {/* <Program/> */}
  {/* <RApp/> */}
   </> 
   )
 }
 
 export default App