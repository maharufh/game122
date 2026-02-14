import React from "react";
import { useDispatch, useSelector } from "react-redux";

function CounterApp() {
  const counter = useSelector(state => state.counter.count);
  const userName = useSelector(state => state.user.name);
  const dispatch = useDispatch();

  return (
    <div className="text-center">
      <h2>Counter App using Redux</h2>

      <h3>Count: {counter}</h3>
      <h3>Name: {userName}</h3>

      <button
        className="btn btn-dark me-2"
        onClick={() => dispatch({ type: "INC" })}
      >
        +1
      </button>

      <button
        className="btn btn-warning me-2"
        onClick={() => dispatch({ type: "DEC" })}
      >
        -1
      </button>

      <button
        className="btn btn-danger"
        onClick={() => dispatch({ type: "SET_NAME" })}
      >
        Change Name
      </button>
    </div>
  );
}

export default CounterApp;
