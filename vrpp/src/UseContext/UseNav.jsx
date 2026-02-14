import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function UseNav() {
  const { mode, setMode } = useContext(ThemeContext);

  return (
    <>
      <div className={`navbar navbar-${mode ? "dark" : "light"} bg-${mode ? "dark" : "light"}`}>
        <div className="container">
          <a className={`navbar-brand text-${mode ? "light" : "dark"}`} href="#">
            Context API
          </a>

          <button
            className={`btn btn-${mode ? "light" : "dark"}`}
            onClick={() => setMode(prev => !prev)}
          >
            Toggle {mode ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </>
  );
}
