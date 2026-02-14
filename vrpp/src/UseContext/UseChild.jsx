import React from 'react'
import UseInnerChild from './UseInnerChild'

export default function UseChild() {
  return (
    <>
    <div className="d-flex justify-content-center align-items-center flex-column"
    style={{border:"2px solid #222",height: "60vh", width:"90%"}}
    >


<h4>child component</h4>
    <UseInnerChild/>
    </div>
    
    </>
  )
}
