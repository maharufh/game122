import React, { useState } from 'react'

function Counter () {
    let [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }
    return (
        <>

<section className='container-fluid mt-4'>
            <div className="row">
                <div className="col-4 m-auto">
                    <div className="card">
                        <h2> Count App</h2>
                        <h3>counter val : {count}</h3>
                        <button onClick={handleClick}>CLick Here</button>

                        </div >
                        </div >
                        </div >
                        </section >
                    
        
        </>
    );
}
export default Counter