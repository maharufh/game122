import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function UseFetch(url) {
    let[data,setData] = useState[null];
    let[error,setError] = useState('')

    useEffect(() =>{
        fetchData()
    },[])
    async function fetchData(){
        try{
            let res = await axios.get(url)
            setData(res.data);
        }
        catch(err){
            setError(err.message)
        }
    }
  return [data,error]
 
   
}
