 import React,{useState} from 'react'
 import ChildComp from './ChildComp'
 
 export default function ParentComp () {
     let [info,setInfo] = useState({
        trainerName:"Kishore",
        course:""
     });


     function receiveData(val){
        setInfo((obj)=>{
            return{...obj,course:val}
        })

        

     }
   return (
     <>
  <section className='container-fluid mt-4 text-center '>
     <div className="row">
        <div className="col-6">
            <div className="card">
                <div className="car-header bg-warning text-white text center">
                    <h2>Parent Component </h2>
                    <p>{info.trainerName}</p>
                    <p>{info.course}</p>
                    <ChildComp tname = {info.trainerName} sendData={receiveData}/>
                </div>
            </div>
        </div>
     </div>
  </section>
     </>
   )
 }
 