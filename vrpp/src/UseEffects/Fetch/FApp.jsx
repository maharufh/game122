import React,{useState} from 'react'
import { useEffect } from 'react';
import FLoader from './FLoader';

function FApp() {
   let [product,setProduct] =  useState();

   async function fetchData(){
try(res =)
    console.log(data);
    setProduct(data)

   }
   catch(err){
    SpeechSynthesisErrorEvent(err.message)
   }
  return (
    <>
    <section className='container-fluid'>
        <div className="row">{

            isLoading && <FLoader/>
            }
            {
                isError && <h2 className='text-danger text-center mt-5'>{isError}</h2>
            }
            {
                !isLoading && !isError && products.map(prod => <FCard prod={prod}/>)
            }

        </div>
    </section>
      
    </>
  )
}

export default FApp