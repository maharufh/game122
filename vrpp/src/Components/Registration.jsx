import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function Registration() {
  let [user, setUser] = useState({
    email: "",
    usn: "",
    pw: "",
    city: "",
    desc: "",
    terms: false
  });

  let { email, usn, pw, city, desc, terms } = user;

  // ⭐ TEXT INPUT HANDLER
  function updateInput(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  // ⭐ CHECKBOX HANDLER
  function updateCheck(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.checked,
    });
  }

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <div className="card shadow-lg p-4">
        <h2 className="text-center text-primary mb-4">Registration Form</h2>

        {/* EMAIL */}
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={updateInput}
            className="form-control"
          />
        </div>

        {/* USERNAME */}
        <div className="mb-3">
          <label className="form-label">Username:</label>
          <input
            type="text"
            placeholder="Enter username"
            name="usn"
            value={usn}
            onChange={updateInput}
            className="form-control"
          />
        </div>

        {/* PASSWORD */}
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            placeholder="Enter password"
            name="pw"
            value={pw}
            onChange={updateInput}
            className="form-control"
          />
        </div>

        {/* CITY */}
        <div className="mb-3">
          <label className="form-label">City:</label>
          <select
            className="form-select"
            name="city"
            value={city}
            onChange={updateInput}
          >
            <option value="">Select City</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Kolkata">Kolkata</option>
          </select>
        </div>

        {/* DESCRIPTION */}
        <div className="mb-3">
          <label className="form-label">Description:</label>
          <textarea
            placeholder="Enter description"
            name="desc"
            value={desc}
            onChange={updateInput}
            className="form-control"
            rows="3"
          ></textarea>
        </div>

        {/* TERMS */}
        <div className="form-check mb-3">
          <input
            type="checkbox"
            name="terms"
            checked={terms}
            onChange={updateCheck}
            className="form-check-input"
          />
          <label className="form-check-label">I agree to the terms</label>
        </div>

        {/* SUBMIT BTN */}
        <button className="btn btn-primary w-100">Submit</button>

        {/* LIVE OUTPUT */}
        <pre className="bg-light p-3 mt-4 border rounded">
{JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </div>
  );
}

export default Registration;
