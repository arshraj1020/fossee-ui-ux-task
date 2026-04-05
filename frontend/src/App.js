import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <h3>FOSSEE Workshops</h3>
        <div className="nav-links">
          <span>Home</span>
          <span>Workshop Statistics</span>
        </div>
      </div>

      {/* Login Section */}
      <div className="container">
        <div className="login-card">

          <h2 className="title">Welcome Back</h2>
          <p className="subtitle">Login to your account</p>

          <label>Username</label>
          <input type="text" placeholder="Username" />

          <label>Password</label>
          <input type="password" placeholder="Password" />

          <button>Sign in</button>

          <hr />

          <p>
            New around here? <span className="link">Sign up</span>
          </p>
          <p className="link">Forgot password?</p>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        Developed by FOSSEE group, IIT Bombay
      </div>
    </div>
  );
}

export default App;