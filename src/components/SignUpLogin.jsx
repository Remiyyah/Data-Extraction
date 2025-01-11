import React, { useState } from "react";


const SignUpLogin = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Sign Up

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        {/* Toggle Between Sign Up and Login */}
        <div className="auth-toggle">
          <button
            className={`auth-toggle-button ${!isLogin ? "active" : ""}`}
            onClick={toggleForm}
          >
            Sign Up
          </button>
          <button
            className={`auth-toggle-button ${isLogin ? "active" : ""}`}
            onClick={toggleForm}
          >
            Login
          </button>
        </div>

        {/* Sign Up Form */}
        {!isLogin && (
          <form className="auth-form" id="signup-form">
            <h2 className="auth-title">Create Your Account</h2>
            <div className="form-group">
              <label htmlFor="signup-email">Email</label>
              <input
                type="email"
                id="signup-email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="signup-password">Password</label>
              <input
                type="password"
                id="signup-password"
                placeholder="Create a password"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="signup-confirm-password">Confirm Password</label>
              <input
                type="password"
                id="signup-confirm-password"
                placeholder="Confirm your password"
                required
              />
            </div>
            <button type="submit" className="auth-button">
              Sign Up
            </button>
          </form>
        )}

        {/* Login Form */}
        {isLogin && (
          <form className="auth-form" id="login-form">
            <h2 className="auth-title">Welcome Back</h2>
            <div className="form-group">
              <label htmlFor="login-email">Email</label>
              <input
                type="email"
                id="login-email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="login-password">Password</label>
              <input
                type="password"
                id="login-password"
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="auth-button">
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUpLogin;