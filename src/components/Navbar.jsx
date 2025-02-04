import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">
         RemiAI Insights
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/analytics" className="navbar-link">
          Admin Panel
        </Link>
       
        <Link to="/comparison" className="navbar-link">
          Preview
        </Link>
        <Link to="/anon" className="navbar-link">
          Anonymize
        </Link>
        <Link to="/account" className="navbar-link">
          Account
        </Link>
        <Link to="/settings" className="navbar-link">
          Settings
        </Link>
        <Link to="/contact" className="navbar-link">
         Contact Us
        </Link>
        {/* <Link to="/email" className="navbar-link">
          Emails
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;