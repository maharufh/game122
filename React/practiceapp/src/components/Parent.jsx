import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [color, setColor] = useState("");

  return (
    <div>
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: color,
          border: "2px solid black",
          marginBottom: "10px"
        }}
      ></div>

      <Child sendColor={setColor} />
    </div>
  );
}

export default Parent;
