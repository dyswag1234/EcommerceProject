import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "../Asset/css/login.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:4000/api/register", newUser)
      .then((res) => {
        console.log(res);
        setErrorMsg("User registered successfully!");
      })
      .catch((err) => {
        console.log(err);
        if (
          err.response.data.message === "User with this email already exists"
        ) {
          setErrorMsg("Email already exists. Please use a different email.");
        } else {
          setErrorMsg("Error registering user.");
        }
      });
  };

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit}>
        <h2>SignUp</h2>
        <div className="form-data">
          <p id="error" className={errorMsg ? "showError" : "hideError"}>
            {errorMsg}
          </p>
        </div>
        <div className="form-data">
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-data">
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-data">
          <input type="submit" value="Sign Up" />
        </div>
        <p>Already have an account?</p>
        <Link to="/login" className="loginLink">
          <span>Login</span>
        </Link>
      </form>
    </div>
  );
}

export default Register;
