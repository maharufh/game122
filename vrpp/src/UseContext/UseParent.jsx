import React from 'react'
import UseChild from './UseChild'

export default function UseParent() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center m-auto flex-column mt-2">
        <h4>This is Parent Component</h4>
        <UseChild />
      </div>
    </>
  )
}
