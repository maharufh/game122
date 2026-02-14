import React, { useState } from 'react';

export default function ChildComp({ tname, sendData }) {
  let [info,] = useState({
    course: "MERN"
  });

  function handleClick(val) {
    sendData(val);  // sending data back to parent
  }

  return (
    <>
      <section className='container-fluid mt-4'>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="car-header bg-primary text-white text center">
                <h2>Child Component</h2>

                {/* 👇 Correctly showing parent data */}
                <p>Parent Data: {tname}</p>

                <p>{info.course}</p>

                <button 
                  className='btn btn-light' 
                  onClick={() => handleClick(info.course)}
                >
                  Click
                </button>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
