import React from 'react'

 function Display({content,val}) {

    console.log("Display Render", content );
  return (
    <>
    <h3>age is : {val}</h3>
    
    </>
  )
}
export default React.memo(Display)
