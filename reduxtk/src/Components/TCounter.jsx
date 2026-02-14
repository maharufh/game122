import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";

function TCounter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="text-center">
      <h2>Counter App (Redux Toolkit)</h2>
      <h3>Count: {count}</h3>

      <button className="btn btn-dark me-2" onClick={() => dispatch(increment())}>
        +1
      </button>

      <button className="btn btn-warning me-2" onClick={() => dispatch(decrement())}>
        -1
      </button>
    </div>
  );
}

export default TCounter;
