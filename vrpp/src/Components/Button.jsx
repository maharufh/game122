import React from 'react'

function Button() {
    function handleClick(){
        console.log("Button Is now  Clicked");

    }
    function handleGreet(){
        console.log(`Welcome ${name}`);
    }
    return (
        <>
        <h1>Event Handling</h1>
        <button onClick={handleClick}>CLick Here</button>
        <button onClick={()=> handleGreet('Maha')}>CLick on Me</button>

        </>
    
  )
}

export default Button