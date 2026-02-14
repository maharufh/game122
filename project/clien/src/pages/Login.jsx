import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Login = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",

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
    const { email, password } = userDetails;

    try {
      const res = await axios.post("http://localhost:3000/api/std/login", {
        email,
        password,
      });
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      toast.success(res.data.message);

      navigate("/profile");
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed");
    }
  };
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2> Login Yourself </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={userDetails.email}
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

          <button type="submit">Login </button>
        </form>

        <p className="login-text">
          Don't have any account?{" "}
          <span onClick={() => navigate("/signup")}>Signup</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
