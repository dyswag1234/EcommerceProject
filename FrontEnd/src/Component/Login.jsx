import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import "../Asset/css/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:4000/api/login", user)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.message === "Auth failed") {
          setErrorMsg("Incorrect email or password. Please try again.");
        } else {
          setErrorMsg("Error logging in.");
        }
      });
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-data">
          <p id="error" className={errorMsg ? "showError" : "hideError"}>
            {errorMsg}
          </p>
        </div>
        <div className="form-data">
          <label>
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-data">
          <label>
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-data">
          <input type="submit" value="Login" />
        </div>
        <Link to="#" className="forgotPass">
          Forgot your password?
        </Link>
        <p>Don't have an account?</p>
        <Link to="/register" className="registerLink">
          <span>Register</span>
        </Link>
      </form>
    </div>
  );
}

export default Login;
