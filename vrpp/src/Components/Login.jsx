import React, { useState } from "react";

export default function Login() {
  let [usn, setUsn] = useState("");
  let [pw, setPw] = useState("");

  function updateUsn(e) {
    setUsn(e.target.value);
  }

  function updatePw(e) {
    setPw(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    let user = { username: usn, password: pw };
    console.log("User Details:", user);

    setUsn("");
    setPw("");
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow p-4">
            <h2 className="text-center mb-4">Login Form</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  placeholder="Enter username"
                  className="form-control"
                  value={usn}
                  onChange={updateUsn}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="form-control"
                  value={pw}
                  onChange={updatePw}
                  required
                />
              </div>

              <button className="btn btn-primary w-100">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
