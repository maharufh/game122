import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    name: "",
    age: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, name, age, password } = userDetails;

    try {
      const res = await axios.post(
        "http://localhost:3000/api/std/signup",
        { email, age, name, password }
      );
      toast.success(res.data.message);
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={userDetails.name}
            onChange={handleFormChange}
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={userDetails.email}
            onChange={handleFormChange}
            required
          />

          <input
            type="number"
            placeholder="Age"
            name="age"
            value={userDetails.age}
            onChange={handleFormChange}
            required
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={userDetails.password}
            onChange={handleFormChange}
            required
          />

          <button type="submit">Sign Up</button>
        </form>

        <p className="login-text">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
