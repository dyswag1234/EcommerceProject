import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";

import "../Asset/auth.css";

function Auth() {
  const [currentView, setCurrentView] = useState("Register");

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="auth">
      {currentView === "Register" ? (
        <>
          <Register onSuccess={() => handleViewChange("Login")} />
          <p>
            Already have an account?
            <span onClick={() => handleViewChange("Login")}>Login</span>
          </p>
        </>
      ) : (
        <>
          <Login />
          <p>
            Don't have an account?
            <span onClick={() => handleViewChange("Register")}>Register</span>
          </p>
        </>
      )}
    </div>
  );
}

export default Auth;
