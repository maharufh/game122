import React from "react";
import ThemeContext from "./ThemeContext";

export default function UseInnerChild() {
  return (
    <ThemeContext.Consumer>
      {({ mode }) => (
        <div
          className={`d-flex justify-content-center align-items-center flex-column 
          bg-${mode ? "dark" : "light"} 
          text-${mode ? "light" : "dark"}`}
        >
          <h4>Inner Child Component</h4>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}
