import React, { useReducer } from 'react'
import countReducer from './CountReducer';

function RCounter() {
    let initialState = {count:0}
    let [state,disPatch] = useReducer(countReducer,initialState)
    console.log(state);
  return (
    <>

       <div className="row">
        <div className="col">
            <div className="card">
                <div className="card-header">

       <h1> Counter App with useReducer</h1>
                </div>
                <div className="card-body text-center">
                    <h3>count:{state.count}</h3>
                    <button className="btn btn-dark me-3" onClick={()=>disPatch({type:'INC'})}>
                        +1
                    </button>
                    <button className="btn btn-primary me-3 " onClick={()=>disPatch({type:'DEC'})}>-1</button>
                    <button className="btn btn-warning me-3" onClick={()=>disPatch({type:'INC',payload:20})}>INCBY</button>
                    <button className="btn btn-success" onClick={()=>disPatch({type:'RESET'})}>Reset</button>
                </div>
            </div>
        </div>
       </div>
    </>
  )
}

export default RCounter